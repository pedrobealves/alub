import React, {Component} from 'react';
import {storage} from './firebase';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUser, getCurrentProfile } from '../../../actions/profileActions';
import { Link, withRouter } from 'react-router-dom';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
    console.log(this.props)
	}

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            this.setState({url});
            const userData = {
              avatar: url
            };
            this.props.editUser(userData, this.props.history);
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
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
