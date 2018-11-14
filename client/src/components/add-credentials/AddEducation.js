import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SidebarProfile from '../layout/navbar/sidebar/SidebarProfile'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    const bck = (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Voltar
              </Link>
              <h1 className="display-4 text-center">Adicionar Educação</h1>
              <p className="lead text-center">
                Adicione qualquer escola, mini-curso, palestra que você tenha assistido, etc
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>






                <input
                  type="submit"
                  value="Adicionar"
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
        <div class="container">
          <div class="row">
            <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Adiconar Experiências</h6>
                </div>
                <div class="ui-block-content">


                  <form onSubmit={this.onSubmit}>
                    <div class="row">

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder="* Nome"
                          name="school"
                          value={this.state.school}
                          onChange={this.onChange}
                          error={errors.school}
                        />
                      </div>

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder="* Periodo ou Ano"
                          name="degree"
                          value={this.state.degree}
                          onChange={this.onChange}
                          error={errors.degree}
                        />
                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextAreaFieldGroup
                          placeholder="Descrição"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                          error={errors.description}
                          info="Conte-nos sobre o programa em que você esteve"
                        />
                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder="* Local"
                          name="fieldofstudy"
                          value={this.state.fieldofstudy}
                          onChange={this.onChange}
                          error={errors.fieldofstudy}
                        />

                      </div>

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <h6>Data de Início</h6>
                        <TextFieldGroup
                          name="from"
                          type="date"
                          value={this.state.from}
                          onChange={this.onChange}
                          error={errors.from}
                        />
                      </div>

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <h6>Data Conclusão</h6>
                        <TextFieldGroup
                          name="to"
                          type="date"
                          value={this.state.to}
                          onChange={this.onChange}
                          error={errors.to}
                          disabled={this.state.disabled ? 'disabled' : ''}
                        />
                        <div className="togglebutton">
                          <label>

                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="current"
                              value={this.state.current}
                              checked={this.state.current}
                              onChange={this.onCheck}
                              id="current"
                            />
                          </label>
                          <span className="m-2">Atual</span>
                        </div>

                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        <Link to="/add-experience" className="add-field">
                          <svg class="olymp-plus-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                          <span>Add Educação</span>
                        </Link>
                      </div>

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <Link to="/dashboard">
                          <button class="btn btn-secondary btn-lg full-width">Cancelar</button>
                        </Link>
                      </div>

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <button type="submit" class="btn btn-primary btn-lg full-width">Salvar</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
            <SidebarProfile />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
