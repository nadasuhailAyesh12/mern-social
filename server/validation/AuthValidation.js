const yup = require('yup')

const registerValidationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .min(8)
        .max(64)
})

const loginValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .min(8)
        .max(64)

})

const passwordValidationSchema = yup.object().shape({
    password: yup
        .string().required("please write your updated password")
        .min(8)
        .max(64)

})

module.exports = { loginValidationSchema, registerValidationSchema, passwordValidationSchema }