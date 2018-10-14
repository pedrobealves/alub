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
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Alub</h1>
                <p className="lead">
                  {' '}
                  Crie um perfil, compartilhe postagens e ajude
                  outras pessoas
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
