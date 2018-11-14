import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import SidebarProfile from '../layout/navbar/sidebar/SidebarProfile'
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySocialInputs: false,
			handle: '',
			company: '',
			website: '',
			location: '',
			status: '',
			skills: '',
			githubusername: '',
			bio: '',
			twitter: '',
			facebook: '',
			linkedin: '',
			youtube: '',
			instagram: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getCurrentProfile();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}

		if (nextProps.profile.profile) {
			const profile = nextProps.profile.profile;

			// Bring skills array back to CSV
			const skillsCSV = profile.skills.join(',');

			// If profile field doesnt exist, make empty string
			profile.company = !isEmpty(profile.company) ? profile.company : '';
			profile.website = !isEmpty(profile.website) ? profile.website : '';
			profile.location = !isEmpty(profile.location) ? profile.location : '';
			profile.githubusername = !isEmpty(profile.githubusername)
				? profile.githubusername
				: '';
			profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
			profile.social = !isEmpty(profile.social) ? profile.social : {};
			profile.twitter = !isEmpty(profile.social.twitter)
				? profile.social.twitter
				: '';
			profile.facebook = !isEmpty(profile.social.facebook)
				? profile.social.facebook
				: '';
			profile.linkedin = !isEmpty(profile.social.linkedin)
				? profile.social.linkedin
				: '';
			profile.youtube = !isEmpty(profile.social.youtube)
				? profile.social.youtube
				: '';
			profile.instagram = !isEmpty(profile.social.instagram)
				? profile.social.instagram
				: '';

			// Set component fields state
			this.setState({
				handle: profile.handle,
				company: profile.company,
				website: profile.website,
				location: profile.location,
				status: profile.status,
				skills: skillsCSV,
				githubusername: profile.githubusername,
				bio: profile.bio,
				twitter: profile.twitter,
				facebook: profile.facebook,
				linkedin: profile.linkedin,
				youtube: profile.youtube,
				instagram: profile.instagram
			});
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const profileData = {
			handle: this.state.handle,
			company: this.state.company,
			website: this.state.website,
			location: this.state.location,
			status: this.state.status,
			skills: this.state.skills,
			githubusername: this.state.githubusername,
			bio: this.state.bio,
			twitter: this.state.twitter,
			facebook: this.state.facebook,
			linkedin: this.state.linkedin,
			youtube: this.state.youtube,
			instagram: this.state.instagram
		};

		this.props.createProfile(profileData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors, displaySocialInputs } = this.state;

		let socialInputs;

		if (displaySocialInputs) {
			socialInputs = (
				<div>
					<InputGroup
						placeholder="Twitter Profile URL"
						name="twitter"
						icon="fab fa-twitter"
						value={this.state.twitter}
						onChange={this.onChange}
						error={errors.twitter}
					/>

					<InputGroup
						placeholder="Facebook Page URL"
						name="facebook"
						icon="fab fa-facebook"
						value={this.state.facebook}
						onChange={this.onChange}
						error={errors.facebook}
					/>

					<InputGroup
						placeholder="Linkedin Profile URL"
						name="linkedin"
						icon="fab fa-linkedin"
						value={this.state.linkedin}
						onChange={this.onChange}
						error={errors.linkedin}
					/>

					<InputGroup
						placeholder="YouTube Channel URL"
						name="youtube"
						icon="fab fa-youtube"
						value={this.state.youtube}
						onChange={this.onChange}
						error={errors.youtube}
					/>

					<InputGroup
						placeholder="Instagram Page URL"
						name="instagram"
						icon="fab fa-instagram"
						value={this.state.instagram}
						onChange={this.onChange}
						error={errors.instagram}
					/>
				</div>
			);
		}

		// Select options for status
		const options = [
			{ label: '* Selecione sua ocupação', value: 0 },
			{ label: 'Desenvolvedor', value: 'Desenvolvedor' },
			{ label: 'Estudante ou Aprendiz', value: 'Estudante ou Aprendiz' },
			{ label: 'Instrutor ou Professor', value: 'Instrutor ou Professor' },
			{ label: 'Interno', value: 'Interno' },
			{ label: 'Outro', value: 'Outro' }
		];

		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
							<div className="ui-block">
								<div className="ui-block-title">
									<h6 className="title">Personal Information</h6>
								</div>
								<div className="ui-block-content">
									<form onSubmit={this.onSubmit}>
										<div className="row">

											<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
												<TextFieldGroup
													placeholder="* Nome de Perfil"
													name="handle"
													value={this.state.handle}
													onChange={this.onChange}
													error={errors.handle}
													disabled="disabled"
												/>
												<SelectListGroup
													placeholder="Status"
													name="status"
													value={this.state.status}
													onChange={this.onChange}
													options={options}
													error={errors.status}
												/>
												<TextFieldGroup
													placeholder="Companhia"
													name="company"
													value={this.state.company}
													onChange={this.onChange}
													error={errors.company}
												/>
												<TextFieldGroup
													placeholder="Website"
													name="website"
													value={this.state.website}
													onChange={this.onChange}
													error={errors.website}
												/>
											</div>

											<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
												<TextFieldGroup
													placeholder="Localização"
													name="location"
													value={this.state.location}
													onChange={this.onChange}
													error={errors.location}
												/>
												<TextFieldGroup
													placeholder="* Habilidades"
													name="skills"
													value={this.state.skills}
													onChange={this.onChange}
													error={errors.skills}
												/>
												<TextFieldGroup
													placeholder="Github"
													name="githubusername"
													value={this.state.githubusername}
													onChange={this.onChange}
													error={errors.githubusername}
												/>
												<TextAreaFieldGroup
													placeholder="Biografia"
													name="bio"
													value={this.state.bio}
													onChange={this.onChange}
													error={errors.bio}
												/>
											</div>

											<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
												<div className="mb-3">
													<button
														type="button"
														onClick={() => {
															this.setState(prevState => ({
																displaySocialInputs: !prevState.displaySocialInputs
															}));
														}}
														className="btn btn-light"
													>
														Adicionar Redes Sociais
                  </button>
													<span className="text-muted m-2">Optional</span>
												</div>
												{socialInputs}
											</div>
											<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
												<button className="btn btn-secondary btn-lg full-width">Restaurar</button>
											</div>
											<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
												<button type="submit" className="btn btn-primary btn-lg full-width">Salvar</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<SidebarProfile />
					</div>
				</div>
				<a className="back-to-top" href="#">
					<img src="/assets/svg-icons/back-to-top.svg" alt="arrow" className="back-icon" />
				</a>
			</React.Fragment>
		);
	}
}

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);
