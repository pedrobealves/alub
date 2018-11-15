import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';

class BlogFeed extends Component {
  render() {
    const { post } = this.props;

    return post.map(post => <BlogItem key={post._id} blog={post} />);
  }
}

BlogFeed.propTypes = {
  post: PropTypes.array.isRequired
};

export default BlogFeed;
