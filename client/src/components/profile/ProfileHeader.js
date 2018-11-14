import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
    <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="top-header">
                <div className="top-header-thumb">
                  <img src="/assets/img/top-header4.png" alt="nature" />
                </div>
                <div className="profile-section">
                  <div className="row">
                    <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                      <ul className="profile-menu">
                        <li>
                          <a href="#" className="active">Inicio</a>
                        </li>
                        <li>
                          <a href="#about">Sobre</a>
                        </li>
                        <li>
                          <a href="#contact">Contato</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                      <ul className="profile-menu">
                        <li>
                          <a href="#blog">Blog</a>
                        </li>
                        <li>
                          <a href="#activities">Atividades</a>
                        </li>
                        <li>
                          <div className="more">
                            <ul className="more-dropdown more-with-triangle">
                              <li>
                                <a href="#"></a>
                              </li>
                              <li>
                                <a href="#"></a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="control-block-button">
                    <div className="btn btn-control bg-primary more">
                      <svg className="olymp-settings-icon">
                        <use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-settings-icon" />
                      </svg>
                      <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                        <li>
                          <a href="#" data-toggle="modal" data-target="#update-header-photo">Atualizar imagem de perfil</a>
                        </li>
                        <li>
                          <a href="#" data-toggle="modal" data-target="#update-header-photo">Atualizar imagem de fundo</a>
                        </li>
                        <li>
                          <a href="">Configurações da conta</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="top-header-author">
                  <a href="" className="author-thumb">
                    <img src={profile.user.avatar} alt="author" />
                  </a>
                  <div className="author-content">
                    <a href="02-ProfilePage.html" className="h4 author-name">{profile.user.name}</a>
                    <div className="country">{profile.location}</div>
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

export default ProfileHeader;
