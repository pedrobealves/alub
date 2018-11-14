import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Landing from '../layout/Landing'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <Landing>
        <div className="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab">
          <div className="title h6">Logar em sua Conta</div>
          <form onSubmit={this.onSubmit} className="content">
            <div className="row">
              <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group label-floating is-empty">
                  <TextFieldGroup
                    placeholder="Seu E-mail"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                </div>
                <div className="form-group label-floating is-empty">
                  <TextFieldGroup
                    placeholder="Sua Senha"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                </div>

                <div className="remember">

                  <div className="checkbox">
                    <label>
                      <input name="optionsCheckboxes" type="checkbox" />
                      Remember Me
        </label>
                  </div>
                  <a href="#" className="forgot">Forgot my Password</a>
                </div>

                <input type="submit" className="btn btn-lg btn-primary full-width" />

                <div className="or"></div>

                <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left"><i className="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>

                <a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>


                <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
              </div>
            </div>
          </form>
        </div>
      </Landing>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
