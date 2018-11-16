import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../validation/is-empty';
import Moment from 'react-moment';

class ProfileInfo extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    return (
      <div className="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
        <div className="ui-block">
          <div className="ui-block-title">
            <h6 className="title">Informações</h6>
          </div>
          <div className="ui-block-content">


            <ul className="widget w-personal-info">
              <li>
                <span className="title">Sobre</span>
                <span className="text">
                  {isEmpty(profile.bio) ? (
                    <span>{firstName} não tem uma biografia</span>
                  ) : (
                      <span>{profile.bio.substring(0, 100)}...</span>
                    )}
                </span>
              </li>
              {isEmpty(profile.birthday) ? null : (
                <li>
                  <span className="title">Nascimento:</span>
                  <span className="text">
                    <Moment fromNow ago>{profile.birthday}</Moment>
                  </span>
                </li>
              )}
              {isEmpty(profile.location) ? null : (
                <li>
                  <span className="title">De:</span>
                  <span className="text">{profile.location}</span>
                </li>
              )}
              <li>
                <span className="title">Ocupação:</span>
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span>em {profile.company}</span>
                )}
              </li>
              {isEmpty(profile.gender) ? null : (
                <li>
                  <span className="title">Sexo:</span>
                  <span className="text">{profile.gender}</span>
                </li>
              )}
              {isEmpty(profile.user.email) ? null : (
                <li>
                  <span className="title">Email:</span>
                  <a href="#contact" className="text">{profile.user.email}</a>
                </li>
              )}
              {isEmpty(profile.website) ? null : (
                <li>
                  <span className="title">Website:</span>
                  <a href={profile.website} className="text">{profile.website}</a>
                </li>
              )}
            </ul>


            <div className="widget w-socials">
              <h6 className="title">Outras Midias:</h6>
              {isEmpty(profile.website) ? null : (
                <a href="profile.website" className="social-item bg-grey" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe fa-2x" aria-hidden="true"></i>
                  Website
                            </a>
              )}
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a href={profile.social.twitter} className="social-item bg-twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  Twitter
                   </a>
              )}
              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <a href={profile.social.facebook} className="social-item bg-facebook" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  Facebook
                            </a>
              )}

              {isEmpty(profile.social && profile.social.linkedin) ? null : (
                <a href={profile.social.linkedin} className="social-item bg-blue" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                  Linkedin
                </a>
              )}

              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <a href={profile.social.youtube} className="social-item bg-google" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                  Youtube
                  </a>
              )}

              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <a href={profile.social.instagram} className="social-item bg-orange" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                  Instagram
                 </a>
              )}
            </div>


          </div>
        </div>
      </div>
    );
  }
}

ProfileInfo.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileInfo;
