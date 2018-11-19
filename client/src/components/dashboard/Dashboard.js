import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead">
              Bem-vindo <Link to={`/profile/${profile.handle}`} className="text-white">{user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Deletar Minha Conta
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead">Bem-vindo <span class="font-weight-bold">{user.name}</span></p>
            <p>Você ainda não criou um perfil, por favor, adicione algumas informações</p>
            <Link to="/create-profile" className="btn btn-md btn-border c-white m-5">
              Criar Perfil
            </Link>
          </div>
        );
      }
    }

    return (
      <div class="main-header">
        <div className="header-spacer"></div>
        <div class="content-bg-wrap bg-account"></div>
        <div class="container">
          <div class="row">
            <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div class="main-header-content">
                <h1> Minha Conta</h1>
                <p>{dashboardContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
