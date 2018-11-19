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
      category: this.state.category,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addBlogPost(newPost);
    this.setState(
      {
        text: '',
        title: '',
        image: '',
        category: ''
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <div className="header-spacer header-spacer-small"></div>
        <div class="main-header">
          <div class="content-bg-wrap bg-group"></div>
          <div class="container">
            <div class="row">
              <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div class="main-header-content">
                  <h1>Bem-vindo ao Blog!</h1>
                  <p>Aqui você...</p>
                </div>
              </div>
            </div>
          </div>

          <img class="img-bottom" src="/assets/img/group-bottom.png" alt="friends" />
        </div>

        <div class="container">
          <div class="row">
            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="ui-block responsive-flex">
                <div class="ui-block-title">
                  <div class="h6 title">Alub Blog</div>
                  <form class="w-search">
                    <div class="form-group with-button">
                      <input class="form-control" type="text" placeholder="Procurar por postagens..." />
                      <button>
                        <svg class="olymp-magnifying-glass-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="container">
          <div class="row">
            <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">

              <div class="ui-block">
                <div class="ui-block-title bg-blue">
                  <h6 class="title c-white">Criar uma Nova Postagem</h6>
                </div>
                <div class="ui-block-content">

                  <form onSubmit={this.onSubmit}>
                    <div class="row">
                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextFieldGroup
                          placeholder="Titulo"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange}
                          error={errors.website}
                        />
                      </div>

                      <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <TextFieldGroup
                          placeholder="Categoria"
                          name="category"
                          value={this.state.category}
                          onChange={this.onChange}
                          error={errors.website}
                        />
                      </div>

                      <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      <TextFieldGroup
                          placeholder="Imagem"
                          name="image"
                          value={this.state.image}
                          onChange={this.onChange}
                          error={errors.website}
                        />
                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        
                      <TextAreaFieldGroup
                          placeholder="No que está pensando?"
                          name="text"
                          value={this.state.text}
                          onChange={this.onChange}
                          error={errors.text}
                        />
                      </div>

                      <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <a href="#" class="btn btn-secondary btn-lg full-width">Cancelar</a>
                      </div>

                      <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <button type="submit" class="btn btn-blue btn-lg full-width">Publicar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>

            <div class="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Mais Acessados</h6>
                </div>
                <div class="ui-block-content">

                </div>
              </div>

              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Recentes</h6>
                </div>
                <div class="ui-block-content">


                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="back-to-top" href="#">
          <img src="/assets/svg-icons/back-to-top.svg" alt="arrow" class="back-icon" />
        </a>
      </React.Fragment>
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
