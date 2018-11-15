import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../actions/blogActions';

class BlogPost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const {post} = this.props.post;
    let postContent;

    console.log(post)

    if (Object.keys(post).length !== 0) {
      postContent = (
      <div>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
      </div>
      );
    } 
  
    return (
      <div className="m-5 post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
             {postContent}
             <Link to="/" className="btn btn-link mb-3">
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(BlogPost);