const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'Insira a escola';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Qual o periodo?';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Qual o local?';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'Quando foi a data de início?';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
