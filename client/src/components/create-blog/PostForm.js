import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import { addBlogPost } from '../../actions/blogActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      image: this.state.image,
      title: this.state.title,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addBlogPost(newPost);
    this.setState(
      {
        text: '',
        title: '',
        image: ''
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post-form mb-3">
                <div className="card card-info">
                  <div className="card-header bg-info text-white">Escreva alguma coisa...</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <TextFieldGroup
                          placeholder="Titulo"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange}
                          error={errors.website}
                        />
                        <TextFieldGroup
                          placeholder="Imagem"
                          name="image"
                          value={this.state.image}
                          onChange={this.onChange}
                          error={errors.website}
                        />
                        <TextAreaFieldGroup
                          placeholder="No que está pensando?"
                          name="text"
                          value={this.state.text}
                          onChange={this.onChange}
                          error={errors.text}
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
                        Publicar
              </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addBlogPost })(PostForm);
