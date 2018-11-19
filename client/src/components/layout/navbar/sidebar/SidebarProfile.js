import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SidebarProfile extends Component {

    render() {
        return (
            <React.Fragment>
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
										<svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/assets/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                                            </a>
                                        </h6>
                                    </div>

                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                        <ul className="your-profile-menu">
                                            <li>
                                                <Link to="/edit-profile">Informaçoes Pessoais</Link>
                                            </li>
                                            <li>
                                                <a href="">Configurações de Conta</a>
                                            </li>
                                            <li>
                                                <a href="">Mudar Senha</a>
                                            </li>
                                            <li>
                                                <Link to="/add-education">Adicionar Educação</Link>
                                            </li>
                                            <li>
                                                <Link to="/add-experience">Adicionar Experência</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="ui-block-title">
                                <a href="" className="h6 title">Notificações</a>
                                <a href="#" className="items-round-little bg-primary">0</a>
                            </div>
                            <div className="ui-block-title">
                                <a href="" className="h6 title">Mensagens</a>
                            </div>
                            <div className="ui-block-title">
                                <a href="" className="h6 title">Condifurações do Feed</a>
                                <a href="#" className="items-round-little bg-blue">0</a>
                            </div>
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">FAVORITOS</h6>
                            </div>
                            <div className="ui-block-title">
                                <a href="" className="h6 title">Criar</a>
                            </div>
                            <div className="ui-block-title">
                                <a href="" className="h6 title">Configurações</a>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SidebarProfile;
