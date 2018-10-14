const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Digite um email válido';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Insira seu email';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Insira sua senha';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
