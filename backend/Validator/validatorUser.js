const { check } = require("express-validator");
const { validateResult } = require("../utils/handlevalidator");

const validatorRegister = [
  check("name", "Bebes Ingresar un nombre!")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 99 }),

  check("email", "Debes ingresar un correo correcto! ")
    .exists()
    .notEmpty()
    .isEmail(),

  check("password", "Min 6 caracteres y max 15")
    .exists()
    .notEmpty()
    .isLength({ min: 6, max: 15 }),

  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = { validatorRegister };
