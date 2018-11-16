import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from './ProfileInfo'
import ProfileAbout from './ProfileAbout'
import ProfileCreds from './ProfileCreds'
import ProfileGithub from './ProfileGithub'
import ProfileContact from './ProfileContact'
import ProfileFooter from './ProfileFooter'
import ProfileActivities from './ProfileActivities'
import Blog from '../../blog'
import Wrapper from './Wrapper'

class About extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="container">
        <div className="row">
          <ProfileInfo profile={profile} />
          <Wrapper>
            <ProfileAbout profile={profile} />
            <ProfileCreds
              education={profile.education}
              experience={profile.experience}
            />
            <Blog profile={profile}/>
            {profile.activities ? (
              <ProfileActivities activities={profile.activities} />
            ) : null}
            {profile.githubusername ? (
              <ProfileGithub username={profile.githubusername} />
            ) : null}
            <ProfileContact />
            <ProfileFooter portfolio={profile.portfolio}/>
          </Wrapper>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  profile: PropTypes.object.isRequired
};

export default About;