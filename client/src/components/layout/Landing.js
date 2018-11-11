import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const bck = (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">alub</h1>
                <p className="lead">
                  {' '}
                  Crie um perfil, compartilhe postagens e ajude
                  outras pessoas!!!
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Inscreva-se
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
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
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>We are the best and biggest social network with 5 billion active users all around the world. Share you
                  thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
				</p>
                <a href="#" className="btn btn-md btn-border c-white">Register Now!</a>
              </div>
            </div>

            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mx-auto">
                

                
                  <div className="content">
                  
              <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left"><i className="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>

<a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>

              </div>

            </div>
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
