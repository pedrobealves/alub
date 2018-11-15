import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getBlogPosts } from '../../actions/blogActions';

class Blog extends Component {
  componentDidMount() {
    this.props.getBlogPosts();
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
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  getBlogPosts: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getBlogPosts })(Blog);
