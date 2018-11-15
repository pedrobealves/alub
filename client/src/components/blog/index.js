import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogFeed from './BlogFeed'
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getUserBlogPost } from '../../actions/blogActions';

class BlogPost extends Component {
  componentDidMount() {
    this.props.getUserBlogPost(this.props.profile.user._id);
  }
  render() {

    const { posts, loading } = this.props.blog;

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <BlogFeed post={posts} />;
    }

    return (
      <div className="ui-block" id="blog">
        <div className="ui-block-title">
          <h6 className="title">Blog</h6>
        </div>
        <div className="ui-block-content">
          <section className="blog-post-wrap">
            <div className="container">
              <div className="row">
                {postContent}
              </div>
            </div>
          </section>
        </div>
      </div>
    );

  }

}

BlogPost.propTypes = {
  getBlogPosts: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getUserBlogPost })(BlogPost);
