import axios from 'axios';

import {
  ADD_BLOG_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_BLOG_POSTS,
  GET_BLOG_POST,
  BLOG_POST_LOADING,
  GET_USER_BLOG_POST,
  DELETE_BLOG_POST
} from './types';

// Add Post
export const addBlogPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/blog', postData)
    .then(res =>
      dispatch({
        type: ADD_BLOG_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
export const getBlogPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/blog')
    .then(res =>
      dispatch({
        type: GET_BLOG_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BLOG_POSTS,
        payload: null
      })
    );
};

// Get Post
export const getBlogPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/blog/${id}`)
    .then(res =>
      dispatch({
        type: GET_BLOG_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BLOG_POST,
        payload: null
      })
    );
};

// Get Post
export const getUserBlogPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/blog/user/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER_BLOG_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_BLOG_POST,
        payload: null
      })
    );
};

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/blog/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BLOG_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/api/blog/like/${id}`)
    .then(res => dispatch(getBlogPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/blog/unlike/${id}`)
    .then(res => dispatch(getBlogPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/blog/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_BLOG_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/blog/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_BLOG_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: BLOG_POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
