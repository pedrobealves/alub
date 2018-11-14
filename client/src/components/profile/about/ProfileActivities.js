import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileActivities extends Component {
    render() {
        const { activities } = this.props;

        const actItems = activities.map(act => (
            <div key={act._id.$oid} className="photo-item half-width">
                <img src={act.image} alt="photo" />
                <div className="overlay overlay-dark"></div>
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
                <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                <div className="content">
                    <a href="#" className="h6 title">
                        {act.title}
                    </a>
                    <time className="published" dateTime={act.date.$date}>
                        <Moment fromNow>
                            {act.date.$date}
                        </Moment>
                    </time>
                </div>
            </div>
        ));
        return (
            <div id="activities" className="ui-block">

                <div className="ui-block-title">
                    <h6 className="title">Atividades</h6>
                </div>

                <div className="ui-block-content">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="tab-content">
                                    <div className="photo-album-wrapper">
                                        {actItems}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProfileActivities;
