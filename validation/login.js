const Validator = require('validator')
const isEmpty = require('./is-empyt')

module.exports = function validateLoginInput(data){
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email inválido'
    }
    
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email é obrigatório'
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Senha é obrigatório'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}