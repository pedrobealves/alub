import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogFeed from './BlogFeed'
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import TextFieldGroup from '../common/TextFieldGroup';
import { getUserBlogPost } from '../../actions/blogActions';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.getUserBlogPost(this.props.profile.user._id);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    const { posts, loading } = this.props.blog;
    const { search } = this.state;

    const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <BlogFeed post={filteredPosts} />;
    }

    return (
      <div className="ui-block" id="blog">
        <div className="ui-block-title">
          <h6 className="title">Blog</h6>
        </div>
        <div className="ui-block-content">
          <section className="blog-post-wrap">
            <div className="container">
              <TextFieldGroup
                placeholder="Procurar"
                name="search"
                value={this.state.search}
                onChange={this.onChange}
              />
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
