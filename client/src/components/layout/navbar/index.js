import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import { getCurrentProfile, clearCurrentProfile } from '../../../actions/profileActions';
import SidebarLeft from './sidebar/SidebarLeft'
import SidebarRight from './sidebar/SidebarRight'
import { ReactComponent as Logo } from './logo.svg';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.getCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { profile } = this.props.profile;
    console.log(profile)

    const authLinks = (
      <div className="author-page author vcard inline-items more">
        <div className="author-thumb">
          <img alt="author" src={user.avatar} className="avatar" />
          <span className="icon-status online"></span>
          <div className="more-dropdown more-with-triangle">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Minha conta</h6>
              </div>

              <ul className="account-settings">
                <li>
                  <Link to="/edit-profile">

                    <svg className="olymp-menu-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>

                    <span>Configurações</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>

                    <span>Fazer Postagem</span>
                  </Link>
                </li>
                <li>
                  <a href=""
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link">
                    <svg className="olymp-logout-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-logout-icon"></use></svg>

                    <span>Deslogar</span>
                  </a>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Configurações do Chat</h6>
              </div>

              <ul className="chat-settings">
                <li>
                  <a href="#">
                    <span className="icon-status online"></span>
                    <span>Online</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-status away"></span>
                    <span>Fora</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-status disconected"></span>
                    <span>Desconectado</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span className="icon-status status-invisible"></span>
                    <span>Invisível</span>
                  </a>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Alub Status</h6>
              </div>

              <form className="form-group with-button custom-status">
                <input className="form-control" placeholder="" type="text" value="" />

                <button className="bg-purple">
                  <svg className="olymp-check-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-check-icon"></use></svg>
                </button>
              </form>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">Sobre</h6>
              </div>

              <ul>
                <li>
                  <a href="#">
                    <span>Termos e Condições</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>FAQs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Politicas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Contato</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <Link to={`/`} className="author-name fn">
          <div className="author-title">
            {user.name}
            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
          </div>
          <span className="author-subtitle"></span>
        </Link>
      </div>

    );

    const link = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Minha Conta
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Sair
          </a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Inscreva-se
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Entrar
          </Link>
        </li>
      </ul>
    );

    const nav = (
      <React.Fragment>
        <SidebarLeft />
        <SidebarRight />
      </React.Fragment>
    )

    const navAuth = (
      <React.Fragment>
        {nav}
        <header className="header" id="site-header">

          <div className="page-title logo-title logo-t">
            {            /*<h6>SHORTCODES</h6>*/
            }
            <Link className="navbar-brand" to="/">
              <Logo className="logo" />
            </Link>
          </div>

          <div className="header-content-wrapper">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                <input className="form-control js-user-search" placeholder="Procurar pessoas ou páginas..." type="text" />
                <button>
                  <svg className="olymp-magnifying-glass-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                </button>
              </div>
            </form>

            <Link to="/profiles" className="link-find-friend">Explorar</Link>

            <div className="control-block">

              <div className="control-icon more has-items">
                <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                <div className="label-avatar bg-blue">6</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Amigos</h6>
                    <Link to="/profiles">Explorar</Link>
                    <a href="#">Configurações</a>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list friend-requests">
                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge7.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Nome</a>
                          <span className="chat-message-item">Amigo: Nome</span>
                        </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge2.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Nome</a>
                          <span className="chat-message-item">4 Amigos em Comum</span>
                        </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>

                      <li className="accepted">
                        <div className="author-thumb">
                          <img src="/assets/img/badge7.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          Você e <a href="#" className="h6 notification-friend">Nome</a> escreva <a href="#" className="notification-link">sobre</a>.
              </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                          <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/avatar58-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Nome</a>
                          <span className="chat-message-item">9 amigos</span>
                        </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                            </span>
                          </a>

                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>

                    </ul>
                  </div>

                  <a href="#" className="view-all bg-blue">Ver todos Eventos</a>
                </div>
              </div>

              <div className="control-icon more has-items">
                <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                <div className="label-avatar bg-purple">2</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Mensagens</h6>
                    <a href="#">Marcar todas lidas</a>
                    <a href="#">Configurações</a>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list chat-message">
                      <li className="message-unread">
                        <div className="author-thumb">
                          <img src="/assets/img/badge9.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Nome</a>
                          <span className="chat-message-item">Texto...</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>
                      <li className="chat-group">
                        <div className="author-thumb">
                          <img src="/assets/img/badge14.png" alt="author" />
                          <img src="/assets/img/badge10.png" alt="author" />
                          <img src="/assets/img/badge11.png" alt="author" />
                          <img src="/assets/img/badge12.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Você, Nome, Nome2 &amp; Nome3 +3</a>
                          <span className="last-message-author">Nome1: </span>
                          <span className="chat-message-item">Texto!</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge8.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Nome</a>
                          <span className="chat-message-item">Texto!.</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge1.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Nome</a>
                          <span className="chat-message-item">Texto...</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="view-all bg-purple">Ver Todas Mensagens</a>
                </div>
              </div>

              <div className="control-icon more has-items">
                <svg className="olymp-thunder-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>

                <div className="label-avatar bg-primary">8</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notificações</h6>
                    <a href="#">Marcar todas como lidas</a>
                    <a href="#">Configurações</a>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list">
                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge14.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Nome</a> comentou em sua <a href="#" className="notification-link">postagem</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                          <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                      </li>

                      <li className="un-read">
                        <div className="author-thumb">
                          <img src="/assets/img/badge3.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>Você e <a href="#" className="h6 notification-friend">Nome</a> agora são amigos comente <a href="#" className="notification-link">sobre</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                          <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                      </li>

                      <li className="with-comment-photo">
                        <div className="author-thumb">
                          <img src="/assets/img/badge5.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Nome</a> comentou em sua <a href="#" className="notification-link">foto</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                        </span>

                        <div className="comment-photo">
                          <img src="/assets/img/comment-photo1.jpg" alt="photo" />
                          <span>“Texto...”</span>
                        </div>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                          <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge10.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Nome</a> convidou você ao <a href="#" className="notification-link">Lugar</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                          <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="/assets/img/badge6.png" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Nome</a> comentou em sua <a href="#" className="notification-link">postagem</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-heart-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                          <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="view-all bg-primary">Ver Todas Notficações</a>
                </div>
              </div>

              {isAuthenticated ? authLinks : guestLinks}

            </div>
          </div>

        </header>



        <header className="header header-responsive" id="site-header-responsive">

          <div className="header-content-wrapper">
            <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#request" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    <div className="label-avatar bg-blue">6</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                    <div className="label-avatar bg-purple">2</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#notification" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-thunder-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>
                    <div className="label-avatar bg-primary">8</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#search" role="tab">
                  <svg className="olymp-magnifying-glass-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                  <svg className="olymp-close-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content tab-content-responsive">

            <div className="tab-pane " id="request" role="tabpanel">

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">AMIGOS</h6>
                  <Link to="/profiles">Explorar</Link>
                  <a href="#">Configurações</a>
                </div>
                <ul className="notification-list friend-requests">
                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar55-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                      <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>
                      </a>

                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar56-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Tony Stevens</a>
                      <span className="chat-message-item">4 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>
                      </a>

                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>
                  <li className="accepted">
                    <div className="author-thumb">
                      <img src="/assets/img/avatar57-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      You and <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" className="notification-link">her wall</a>.
          </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar58-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                      <span className="chat-message-item">9 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        </span>
                      </a>

                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>
                </ul>
                <a href="#" className="view-all bg-blue">Check all your Events</a>
              </div>

            </div>

            <div className="tab-pane " id="chat" role="tabpanel">

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <ul className="notification-list chat-message">
                  <li className="message-unread">
                    <div className="author-thumb">
                      <img src="/assets/img/avatar59-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Diana Jameson</a>
                      <span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar60-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Jake Parker</a>
                      <span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar61-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
                      <span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>

                  <li className="chat-group">
                    <div className="author-thumb">
                      <img src="/assets/img/avatar11-sm.jpg" alt="author" />
                      <img src="/assets/img/avatar12-sm.jpg" alt="author" />
                      <img src="/assets/img/avatar13-sm.jpg" alt="author" />
                      <img src="/assets/img/avatar10-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                      <span className="last-message-author">Ed:</span>
                      <span className="chat-message-item">Yeah! Seems fine by me!</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    </div>
                  </li>
                </ul>

                <a href="#" className="view-all bg-purple">View All Messages</a>
              </div>

            </div>

            <div className="tab-pane " id="notification" role="tabpanel">

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Notifications</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <ul className="notification-list">
                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar62-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-comments-post-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                    </div>
                  </li>

                  <li className="un-read">
                    <div className="author-thumb">
                      <img src="/assets/img/avatar63-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div>You and <a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                    </div>
                  </li>

                  <li className="with-comment-photo">
                    <div className="author-thumb">
                      <img src="/assets/img/avatar64-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" className="notification-link">photo</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-comments-post-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                    </span>

                    <div className="comment-photo">
                      <img src="/assets/img/comment-photo1.jpg" alt="photo" />
                      <span>“She looks incredible in that outfit! We should see each...”</span>
                    </div>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar65-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" className="notification-link">Gotham Bar</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="/assets/img/avatar66-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">James Summers</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-heart-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                      <svg className="olymp-little-delete"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                    </div>
                  </li>
                </ul>

                <a href="#" className="view-all bg-primary">View All Notifications</a>
              </div>

            </div>

            <div className="tab-pane " id="search" role="tabpanel">


              <form className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                  <input className="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
                </div>
              </form>


            </div>

          </div>

        </header>
      </React.Fragment>
    )

    const navOutAuth = (
      <div className="header--standard header--standard-landing" id="header--standard">
        <div className="container">
          <div className="header--standard-wrap">
            <a href="#" className="logo">
              <div className="img-wrap">
                <img src="/assets/img/logo.png" alt="Olympus" />
              </div>
              <div className="title-block">
                <h6 className="logo-title">alub</h6>
                <div className="sub-title">SOCIAL NETWORK</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )

    return (/*
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Logo className={styleLogo.logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Explorar
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    */
      <React.Fragment>
        {isAuthenticated ? navAuth : navOutAuth}
      </React.Fragment>
    );

  }
}

Navbar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, logoutUser, clearCurrentProfile })(
  Navbar
);
