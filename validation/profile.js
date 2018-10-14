const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Seu nome de usuário deve conter mais de 2 caracteres';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Insira um nome de usuário';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Qual é sua ocupação?';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Insira suas habilidades';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Não é um URL válido';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Não é um URL válido';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Não é um URL válido';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Não é um URL válido';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Não é um URL válido';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Não é um URL válido';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
