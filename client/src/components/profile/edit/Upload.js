import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUser, getCurrentProfile } from '../../../actions/profileActions';
import { Link, withRouter } from 'react-router-dom';
import InputUpload from '../../common/InputUpload'


class ImageUpload extends Component {

  render() {
    return (
      <div>
        <InputUpload editUser={this.props.editUser} history={this.props.history}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
	profile: state.profile,
	errors: state.errors
});

ImageUpload.propTypes = {
	editUser: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { editUser, getCurrentProfile })(
	withRouter(ImageUpload)
);
