import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      gender: '',
      status: '',
      skills: '',
      interests: '',
      birthday: '',
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
      gender: this.state.gender,
      interests: this.state.interests,
      skills: this.state.skills,
      birthday: this.state.birthday,
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
        <React.Fragment>
          <div className="form-group with-icon label-floating">

            <InputGroup
              placeholder="Twitter URL"
              name="twitter"
              icon="fab fa-twitter"
              value={this.state.twitter}
              onChange={this.onChange}
              error={errors.twitter}
            />
          </div>
          <div className="form-group with-icon label-floating">

            <InputGroup
              placeholder="Facebook URL"
              name="facebook"
              icon="fab fa-facebook"
              value={this.state.facebook}
              onChange={this.onChange}
              error={errors.facebook}
            />
          </div>

          <div className="form-group with-icon label-floating">

            <InputGroup
              placeholder="Linkedin URL"
              name="linkedin"
              icon="fab fa-linkedin"
              value={this.state.linkedin}
              onChange={this.onChange}
              error={errors.linkedin}
            />
          </div>

          <div className="form-group with-icon label-floating">

            <InputGroup
              placeholder="YouTube URL"
              name="youtube"
              icon="fab fa-youtube"
              value={this.state.youtube}
              onChange={this.onChange}
              error={errors.youtube}
            />
          </div>

          <div className="form-group with-icon label-floating">

            <InputGroup
              placeholder="Instagram URL"
              name="instagram"
              icon="fab fa-instagram"
              value={this.state.instagram}
              onChange={this.onChange}
              error={errors.instagram}
            />
          </div>

        </React.Fragment>
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

    const bck = (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Crie seu Perfil</h1>
              <p className="lead text-center">
                Vamos pegar algumas informações para criar seu perfil
              </p>
              <small className="d-block pb-3">* = itens obrigatórios</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Nome de Perfil"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Um identificador exclusivo para o URL do seu perfil. Seu nome completo, nome da empresa, apelido"
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="Nos dê uma ideia em que nível você está"
                />
                <TextFieldGroup
                  placeholder="Companhia"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Poderia ser sua própria empresa ou para que trabalha"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Poderia ser seu próprio site ou de uma empresa"
                />
                <TextFieldGroup
                  placeholder="Localização"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Cidade ou cidade e estado, (ex. Cornélio Procópio, PR)"
                />
                <TextFieldGroup
                  placeholder="* Habilidades"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Por favor, use valores separados por vírgula (por exemplo, Photoshop, CSS, JavaScript"
                />
                <TextFieldGroup
                  placeholder="Github"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="Se você quiser seus repositórios mais recentes amostra e um link do Github, inclua seu nome de usuário"
                />
                <TextAreaFieldGroup
                  placeholder="Biografia"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Conte-nos um pouco sobre você"
                />

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
                  <span className="text-muted">Opcional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Criar"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <React.Fragment>
				<div className="header-spacer"></div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Informações</h6>
                </div>
                <div className="ui-block-content">


                  <form onSubmit={this.onSubmit}>
                    <div className="row">

                      <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder="Nome de Perfil"
                          name="handle"
                          value={this.state.handle}
                          onChange={this.onChange}
                          error={errors.handle}
                        />
                      </div>

                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group label-floating is-select">
                          <SelectListGroup
                            placeholder="Status"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                            options={options}
                            error={errors.status}
                          />
                        </div>

                        <TextFieldGroup
                          placeholder="Website"
                          name="website"
                          value={this.state.website}
                          onChange={this.onChange}
                          error={errors.website}
                        />

                        	<TextFieldGroup
													placeholder="Nascimento"
													name="birthday"
													type="date"
													value={this.state.birthday}
													onChange={this.onChange}
													error={errors.birthday}
												/>
                      </div>

                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder="Companhia"
                          name="company"
                          value={this.state.company}
                          onChange={this.onChange}
                          error={errors.company}
                        />

                        <TextFieldGroup
                          placeholder="Github"
                          name="githubusername"
                          value={this.state.githubusername}
                          onChange={this.onChange}
                          error={errors.githubusername}
                        />
                        	<TextFieldGroup
													placeholder="Interesses"
													name="interests"
													value={this.state.interests}
													onChange={this.onChange}
													error={errors.interests}
												/>

                      </div>

                      <div className="col col-lg-12 col-md-12 col-sm-12 col-12">

                        <TextFieldGroup
                          placeholder="Localização"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange}
                          error={errors.location}
                        />
                      </div>

                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <TextAreaFieldGroup
                          placeholder="Biografia"
                          name="bio"
                          value={this.state.bio}
                          onChange={this.onChange}
                          error={errors.bio}
                          info="Conte-nos um pouco sobre você"
                        />
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <SelectListGroup
                          placeholder="Sexo"
                          name="gender"
                          value={this.state.gender}
                          onChange={this.onChange}
                          options={[
                            { label: 'Selecione', value: 0 },
                            { label: 'M', value: 'M' },
                            { label: 'F', value: 'F' },
                            { label: 'Outro', value: 'Outro' },
                          ]}
                          error={errors.gender}
                        />
                        <TextFieldGroup
                          placeholder="* Habilidades"
                          name="skills"
                          value={this.state.skills}
                          onChange={this.onChange}
                          error={errors.skills}
                          info="Por favor, use valores separados por vírgula (por exemplo, Photoshop, CSS, JavaScript"
                        />
                      </div>
                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

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
                        <span className="text-muted m-2">Opcional</span>
                        {socialInputs}
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <button className="btn btn-secondary btn-lg full-width">Restaurar</button>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <button type="submit" className="btn btn-primary btn-lg full-width">Criar Perfil</button>
                      </div>

                    </div>
                  </form>

                </div>
              </div>
            </div>

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
                            Configurações
										<svg className="olymp-dropdown-arrow-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                          </a>
                        </h6>
                      </div>

                      <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                        <ul className="your-profile-menu">
                          <li>
                            <a href="">Criar Perfil</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>



              </div>
            </div>
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
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
