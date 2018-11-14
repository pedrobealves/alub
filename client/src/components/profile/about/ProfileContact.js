import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import './about.scss'


export default () => {

	return (
		<section className="ui-block contact-form-animation scrollme" id="contact">
			<div className="ui-block-title">
				<h6 className="title">Contato</h6>
			</div>
			<div className="ui-block-content">

				<div className="container">
					<div className="row">
						<div className="col col-12  m-auto">


							<div className="contact-form-wrap">
								<form className="contact-form" action="https://formspree.io/pedrobealves@gmail.com" method="POST">
									<div className="row">
										<div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div className="form-group label-floating">
												<label className="control-label">Nome</label>
												<input className="form-control" placeholder="" type="text" />
											</div>
										</div>
										<div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div className="form-group label-floating">
												<label className="control-label">Último Nome</label>
												<input className="form-control" placeholder="" type="text" />
											</div>
										</div>
										<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
											<div className="form-group label-floating">
												<label className="control-label">Seu email</label>
												<input className="form-control" placeholder="" type="email" />
											</div>

											<div className="form-group label-floating is-select">
												<label className="control-label">Assunto</label>
												<select className="selectpicker form-control">
													<option value="AC">Contrato</option>
													<option value="AC">Outro</option>
												</select>
											</div>

											<div className="form-group label-floating is-empty">
												<label className="control-label">Sua Mensagem</label>
												<textarea className="form-control" placeholder=""></textarea>
											</div>

											<button className="btn btn-purple btn-lg full-width">Enviar Mensagem</button>
										</div>
									</div>
								</form>
							</div>


						</div>
					</div>
				</div>
			</div>
		</section>

	);
}