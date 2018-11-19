const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Blog = require('../../models/Blog');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route   GET api/blog/test
// @desc    Tests blog route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Blog Works' }));

// @route   GET api/blog
// @desc    Get posts
// @access  Public
router.get('/', (req, res) => {
    Blog.find()
        .sort({ date: -1 })
        .then(blog => res.json(blog))
        .catch(err => res.status(404).json({ nopostsfound: 'No blog found' }));
});

// @route   GET api/blog/:id
// @desc    Get blog post by id
// @access  Public
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No blog post found with that ID' })
        );
});

// @route   GET api/blog/user/:id
// @desc    Get blog post by user id
// @access  Public
router.get('/user/:id', (req, res) => {
    Blog.find({ user: req.params.id })
        .then(blog => res.json(blog))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No blog user post found with that ID' })
        );
});


// @route   POST api/blog
// @desc    Create post
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        // Check Validation
        if (!isValid) {
            // If any errors, send 400 with errors object
            return res.status(400).json(errors);
        }

        const newPost = new Blog({
            title: req.body.title,
            image: req.body.image,
            category: typeof req.body.category !== 'undefined'?req.body.category.split(','):req.body.category,
            tag: req.body.tag,
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id
        });

        newPost.save().then(post => res.json(post));
    }
);

// @route   DELETE api/blog/:id
// @desc    Delete post
// @access  Private
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Blog.findById(req.params.id)
                .then(post => {
                    // Check for post owner
                    if (post.user.toString() !== req.user.id) {
                        return res
                            .status(401)
                            .json({ notauthorized: 'User not authorized' });
                    }

                    // Delete
                    post.remove().then(() => res.json({ success: true }));
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
    }
);

// @route   POST api/blog/like/:id
// @desc    Like post
// @access  Private
router.post(
    '/like/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Blog.findById(req.params.id)
                .then(post => {
                    if (
                        post.likes.filter(like => like.user.toString() === req.user.id)
                            .length > 0
                    ) {
                        return res
                            .status(400)
                            .json({ alreadyliked: 'User already liked this post' });
                    }

                    // Add user id to likes array
                    post.likes.unshift({ user: req.user.id });

                    post.save().then(post => res.json(post));
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
    }
);

// @route   POST api/blog/unlike/:id
// @desc    Unlike post
// @access  Private
router.post(
    '/unlike/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Blog.findById(req.params.id)
                .then(post => {
                    if (
                        post.likes.filter(like => like.user.toString() === req.user.id)
                            .length === 0
                    ) {
                        return res
                            .status(400)
                            .json({ notliked: 'You have not yet liked this post' });
                    }

                    // Get remove index
                    const removeIndex = post.likes
                        .map(item => item.user.toString())
                        .indexOf(req.user.id);

                    // Splice out of array
                    post.likes.splice(removeIndex, 1);

                    // Save
                    post.save().then(post => res.json(post));
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
    }
);

// @route   POST api/blog/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
    '/comment/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        // Check Validation
        if (!isValid) {
            // If any errors, send 400 with errors object
            return res.status(400).json(errors);
        }

        Blog.findById(req.params.id)
            .then(post => {
                const newComment = {
                    text: req.body.text,
                    name: req.body.name,
                    avatar: req.body.avatar,
                    user: req.user.id
                };

                // Add to comments array
                post.comments.unshift(newComment);

                // Save
                post.save().then(post => res.json(post));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    }
);

// @route   DELETE api/blog/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
    '/comment/:id/:comment_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post.findById(req.params.id)
            .then(post => {
                // Check to see if comment exists
                if (
                    post.comments.filter(
                        comment => comment._id.toString() === req.params.comment_id
                    ).length === 0
                ) {
                    return res
                        .status(404)
                        .json({ commentnotexists: 'Comment does not exist' });
                }

                // Get remove index
                const removeIndex = post.comments
                    .map(item => item._id.toString())
                    .indexOf(req.params.comment_id);

                // Splice comment out of array
                post.comments.splice(removeIndex, 1);

                post.save().then(post => res.json(post));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    }
);

module.exports = router;
