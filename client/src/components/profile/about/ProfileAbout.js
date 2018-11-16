import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // interests List
    const interests = profile.interests.map((interests, index) => (
      <div key={index} className="p-3">
        <i className="fas fa-angle-right" /> {interests}
      </div>
    ));

    // languages List
    const languages = profile.languages.map((languages, index) => (
      <div key={index} className="p-3">
        <i className="fas fa-angle-right" /> {languages}
      </div>
    ));

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));


    return (
      <div className="ui-block" id="about">
        <div className="ui-block-title">
          <h6 className="title">Sobre</h6>
        </div>
        <div className="ui-block-content">
          <div className="row">
            <div className="col-12">
              <span className="text">{isEmpty(profile.bio) ? (
                <span>{firstName} não tem uma biografia</span>
              ) : (
                  <span>{profile.bio}</span>
                )}</span>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">Habilidades:</span>
                  <span className="text">{skills}</span>
                </li>
                <li>
                  <span className="title">Idiomas:</span>
                  <span className="text">{languages}</span>
                </li>
              </ul>

            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">Interesses:</span>
                  <span className="text">{interests}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
