const { check } = require("express-validator");
const validateResults = require("../utils/handlevalidator");



const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99})
    .withMessage('Max length is 100 bytes'),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15})
    .withMessage('Max length is 100 bytes'),
    check("email")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('Max length is 100 bytes'),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

 

module.exports = { validatorRegister};