import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SidebarProfile from '../layout/navbar/sidebar/SidebarProfile'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      location: '',
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

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
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
                          placeholder="* Companhia"
                          name="company"
                          value={this.state.company}
                          onChange={this.onChange}
                          error={errors.company}
                        />
                      </div>

                      <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <TextFieldGroup
                          placeholder="* Titulo"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange}
                          error={errors.title}
                        />
                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextAreaFieldGroup
                          placeholder="Descrição"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                          error={errors.description}
                          info="Conte-nos sobre a experiência"
                        />
                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        <TextFieldGroup
                          placeholder="Localização"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange}
                          error={errors.location}
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
                              info=""
                            />
                          </label>
                          <span className="m-2">Trabalho Atual</span>
                        </div>
                      </div>

                      <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        <Link to="/add-education" className="add-field">
                          <svg class="olymp-plus-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                          <span>Add Experiência</span>
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
