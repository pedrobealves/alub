import React, { Component } from 'react';
import { storage } from '../../config/firebase';

class InputUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
      isHidden: true
    }
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          this.setState({ url });
          const userData = {
            avatar: url
          };
          this.props.editUser(userData, this.props.history);
        })
      });
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {

    const modal = (
      <React.Fragment>
        <a href="#" onClick={this.toggleHidden.bind(this)} class="upload-photo-item">
          <svg class="olymp-computer-icon"><use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>

          <h6>Upload Photo</h6>
          <span>Browse your computer.</span>
        </a>

        <a href="#" class="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">

          <svg class="olymp-photos-icon"><use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>

          <h6>Choose from My Photos</h6>
          <span>Choose from your uploaded photos</span>
        </a>
      </React.Fragment>
    )

    const upload = (
      <div style={style}>
      <progress value={this.state.progress} max="100" />
      <br />
      <input type="file" onChange={this.handleChange} />
      <button onClick={this.handleUpload}>Upload</button>
      <br />
      <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
    </div>
    )

    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div class="modal fade" id="update-header-photo" tabindex="-1" role="dialog" aria-labelledby="update-header-photo" aria-hidden="true">
        <div class="modal-dialog window-popup update-header-photo" role="document">
          <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
              <svg class="olymp-close-icon"><use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
            </a>

            <div class="modal-header">
              <h6 class="title">Update Header Photo</h6>
            </div>

            <div class="modal-body">
            {!this.state.isHidden && upload || modal}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InputUpload;
