const express = require("express");
const router = express.Router();
const {
  Users,
  RegisterUser,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} =require("../controllers/UsersControllers.js");
const {validatorRegister} = require('../Validator/validatorUser.js')

// import checkAuth from "../middleware/checkAuth.js";

// Autenticación, Registro y Confirmación de Usuarios
router.post("/", validatorRegister, RegisterUser); 

// Crea un nuevo usuario
// router.post("/login", autenticar);
// router.get("/confirmar/:token", confirmar);
// router.post("/olvide-password", olvidePassword);
// router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
// router.get("/perfil", checkAuth, perfil);

module.exports = router;