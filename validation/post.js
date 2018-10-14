const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'O texto deve conter entre 10 e 300 caracteres';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Insira um texto';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
