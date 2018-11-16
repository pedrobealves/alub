import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SidebarLeft extends Component {

	render() {
		return (
			<React.Fragment>
				{       /*Fixed Sidebar Left*/}
				<div className="fixed-sidebar">
					<div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

						<Link to="/" className="logo">
							<div className="img-wrap">
								<img src="/assets/img/logo.png" alt="Olympus" />
							</div>
						</Link>

						<div className="mCustomScrollbar" data-mcs-theme="dark">
							<ul className="left-menu">
								<li>
									<a href="#" className="js-sidebar-open">
										<svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="OPEN MENU"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
									</a>
								</li>
								<li>
									<Link to="/feed">
										<svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
									</Link>
								</li>
								<li>
									<a href="16-FavPagesFeed.html">
										<svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="17-FriendGroups.html">
										<svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="18-MusicAndPlaylists.html">
										<svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="19-WeatherWidget.html">
										<svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="20-CalendarAndEvents-MonthlyCalendar.html">
										<svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="24-CommunityBadges.html">
										<svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="25-FriendsBirthday.html">
										<svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="26-Statistics.html">
										<svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
									</a>
								</li>
								<li>
									<a href="27-ManageWidgets.html">
										<svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
						<a href="02-ProfilePage.html" className="logo">
							<div className="img-wrap">
								<img src="/assets/img/logo.png" alt="Olympus" />
							</div>
							<div className="title-block">
								<h6 className="logo-title">olympus</h6>
							</div>
						</a>

						<div className="mCustomScrollbar" data-mcs-theme="dark">
							<ul className="left-menu">
								<li>
									<a href="#" className="js-sidebar-open">
										<svg className="olymp-close-icon left-menu-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
										<span className="left-menu-title">Collapse Menu</span>
									</a>
								</li>
								<li>
									<a href="03-Newsfeed.html">
										<svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
										<span className="left-menu-title">Newsfeed</span>
									</a>
								</li>
								<li>
									<a href="16-FavPagesFeed.html">
										<svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
										<span className="left-menu-title">Fav Pages Feed</span>
									</a>
								</li>
								<li>
									<a href="17-FriendGroups.html">
										<svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
										<span className="left-menu-title">Friend Groups</span>
									</a>
								</li>
								<li>
									<a href="18-MusicAndPlaylists.html">
										<svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
										<span className="left-menu-title">Music & Playlists</span>
									</a>
								</li>
								<li>
									<a href="19-WeatherWidget.html">
										<svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
										<span className="left-menu-title">Weather App</span>
									</a>
								</li>
								<li>
									<a href="20-CalendarAndEvents-MonthlyCalendar.html">
										<svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
										<span className="left-menu-title">Calendar and Events</span>
									</a>
								</li>
								<li>
									<a href="24-CommunityBadges.html">
										<svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
										<span className="left-menu-title">Community Badges</span>
									</a>
								</li>
								<li>
									<a href="25-FriendsBirthday.html">
										<svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
										<span className="left-menu-title">Friends Birthdays</span>
									</a>
								</li>
								<li>
									<a href="26-Statistics.html">
										<svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
										<span className="left-menu-title">Account Stats</span>
									</a>
								</li>
								<li>
									<a href="27-ManageWidgets.html">
										<svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
										<span className="left-menu-title">Manage Widgets</span>
									</a>
								</li>
							</ul>

							<div className="profile-completion">

								<div className="skills-item">
									<div className="skills-item-info">
										<span className="skills-item-title">Profile Completion</span>
										<span className="skills-item-count"><span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span><span className="units">76%</span></span>
									</div>
									<div className="skills-item-meter">
										<span className="skills-item-meter-active bg-primary"></span>
									</div>
								</div>

								<span>Complete <a href="#">your profile</a> so people can know more about you!</span>

							</div>
						</div>
					</div>
				</div>

				{/*end Fixed Sidebar Left 


Fixed Sidebar Left*/}

				<div className="fixed-sidebar fixed-sidebar-responsive">

					<div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
						<a href="#" className="logo js-sidebar-open">
							<img src="/assets/img/logo.png" alt="Olympus" />
						</a>

					</div>

					<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
						<a href="#" className="logo">
							<div className="img-wrap">
								<img src="/assets/img/logo.png" alt="Olympus" />
							</div>
							<div className="title-block">
								<h6 className="logo-title">olympus</h6>
							</div>
						</a>

						<div className="mCustomScrollbar" data-mcs-theme="dark">

							<div className="control-block">
								<div className="author-page author vcard inline-items">
									<div className="author-thumb">
										<img alt="author" src="/assets/img/author-page.jpg" className="avatar" />
										<span className="icon-status online"></span>
									</div>
									<a href="02-ProfilePage.html" className="author-name fn">
										<div className="author-title">
											James Spiegel <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
										</div>
										<span className="author-subtitle">SPACE COWBOY</span>
									</a>
								</div>
							</div>

							<div className="ui-block-title ui-block-title-small">
								<h6 className="title">MAIN SECTIONS</h6>
							</div>

							<ul className="left-menu">
								<li>
									<a href="#" className="js-sidebar-open">
										<svg className="olymp-close-icon left-menu-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
										<span className="left-menu-title">Collapse Menu</span>
									</a>
								</li>
								<li>
									<a href="mobile-index.html">
										<svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
										<span className="left-menu-title">Newsfeed</span>
									</a>
								</li>
								<li>
									<a href="Mobile-28-YourAccount-PersonalInformation.html">
										<svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
										<span className="left-menu-title">Fav Pages Feed</span>
									</a>
								</li>
								<li>
									<a href="mobile-29-YourAccount-AccountSettings.html">
										<svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
										<span className="left-menu-title">Friend Groups</span>
									</a>
								</li>
								<li>
									<a href="Mobile-30-YourAccount-ChangePassword.html">
										<svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
										<span className="left-menu-title">Music & Playlists</span>
									</a>
								</li>
								<li>
									<a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
										<svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
										<span className="left-menu-title">Weather App</span>
									</a>
								</li>
								<li>
									<a href="Mobile-32-YourAccount-EducationAndEmployement.html">
										<svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
										<span className="left-menu-title">Calendar and Events</span>
									</a>
								</li>
								<li>
									<a href="Mobile-33-YourAccount-Notifications.html">
										<svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
										<span className="left-menu-title">Community Badges</span>
									</a>
								</li>
								<li>
									<a href="Mobile-34-YourAccount-ChatMessages.html">
										<svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
										<span className="left-menu-title">Friends Birthdays</span>
									</a>
								</li>
								<li>
									<a href="Mobile-35-YourAccount-FriendsRequests.html">
										<svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
										<span className="left-menu-title">Account Stats</span>
									</a>
								</li>
								<li>
									<a href="#">
										<svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
										<span className="left-menu-title">Manage Widgets</span>
									</a>
								</li>
							</ul>

							<div className="ui-block-title ui-block-title-small">
								<h6 className="title">YOUR ACCOUNT</h6>
							</div>

							<ul className="account-settings">
								<li>
									<a href="#">

										<svg className="olymp-menu-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>

										<span>Profile Settings</span>
									</a>
								</li>
								<li>
									<a href="#">
										<svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>

										<span>Create Fav Page</span>
									</a>
								</li>
								<li>
									<a href="#">
										<svg className="olymp-logout-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-logout-icon"></use></svg>

										<span>Log Out</span>
									</a>
								</li>
							</ul>

							<div className="ui-block-title ui-block-title-small">
								<h6 className="title">About Olympus</h6>
							</div>

							<ul className="about-olympus">
								<li>
									<a href="#">
										<span>Terms and Conditions</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>FAQs</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>Careers</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>Contact</span>
									</a>
								</li>
							</ul>

						</div>
					</div>
				</div>

				{ /*end Fixed Sidebar Left*/}
			</React.Fragment>
		);
	}
}

export default SidebarLeft;
