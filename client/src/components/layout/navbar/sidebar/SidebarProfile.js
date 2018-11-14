import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebarProfile extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12  responsive-display-none">
                    <div className="ui-block">


                        <div className="your-profile">
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">Seu PERFIL</h6>
                            </div>

                            <div id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h6 className="mb-0">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Profile Settings
										<svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                                            </a>
                                        </h6>
                                    </div>

                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                        <ul className="your-profile-menu">
                                            <li>
                                                <a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
                                            </li>
                                            <li>
                                                <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                            </li>
                                            <li>
                                                <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                                            </li>
                                            <li>
                                                <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                                            </li>
                                            <li>
                                                <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="ui-block-title">
                                <a href="33-YourAccount-Notifications.html" className="h6 title">Notifications</a>
                                <a href="#" className="items-round-little bg-primary">8</a>
                            </div>
                            <div className="ui-block-title">
                                <a href="34-YourAccount-ChatMessages.html" className="h6 title">Chat / Messages</a>
                            </div>
                            <div className="ui-block-title">
                                <a href="35-YourAccount-FriendsRequests.html" className="h6 title">Friend Requests</a>
                                <a href="#" className="items-round-little bg-blue">4</a>
                            </div>
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">FAVOURITE PAGE</h6>
                            </div>
                            <div className="ui-block-title">
                                <a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Create Fav Page</a>
                            </div>
                            <div className="ui-block-title">
                                <a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Fav Page Settings</a>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SidebarProfile;
