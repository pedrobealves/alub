const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegisterInput(data){
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.password2 = !isEmpty(data.password2) ? data.password2 : ''


    if(!Validator.isLength(data.name, { min: 2, max: 30})){
        errors.name = 'Nome deve conter entre 2 e 30 caracteres'
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Nome é obrigatório'
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email é obrigatório'
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email inválido'
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Senha é obrigatório'
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Senha deve conter entre 6 e 30 caracteres'
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirmação de senha é obrigatório'
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Senhas devem ser iguais'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}