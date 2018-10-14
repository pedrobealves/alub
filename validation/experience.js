const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Insira o título de trabalho';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Qual foi a companhia do trabalho?';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'Quando foi a data de início?';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
