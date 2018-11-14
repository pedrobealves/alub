import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated && !this.props.children) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const children = this.props.children;

    const lead = (
      <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mx-auto">
        <div className="content">
          <Link to="/register" className="btn btn-lg bg-facebook full-width btn-icon-left">
            Inscreva-se
                </Link>
          <Link to="/login" className="btn btn-lg bg-twitter full-width btn-icon-left">
            Entrar
                </Link>
        </div>
      </div>
    )

    const form = (
      <div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">


        <div class="registration-login-form">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <Link class="nav-link active" to="/login">
                <svg class="olymp-login-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-login-icon"></use></svg>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/register">
                <svg class="olymp-register-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-register-icon"></use></svg>
              </Link>
            </li>
          </ul>
          {children}
        </div>

      </div>
    )

    return (
      <div className="landing-page">

        <div className="content-bg-wrap"></div>

        <div className="header-spacer--standard"></div>

        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Bem-vindo ao alub</h1>
                <p> Crie um perfil, compartilhe postagens e ajude
                  outras pessoas!
				</p>
                <a href="#" className="btn btn-md btn-border c-white">Sobre</a>
              </div>
            </div>

            {children ? form : lead}

          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
