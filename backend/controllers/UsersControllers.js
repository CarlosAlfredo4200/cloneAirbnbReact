const Users = require("../models/UserModels");
const generarId = require('../utils/generarId');
const generarJWT = require("../utils/generarJWT");

const RegisterUser = async (req, res) => {
   // Evitar registros duplicados
   const { email } = req.body;
   const existeUsuario = await Users.findOne({ email });
 
   if (existeUsuario) {
     const error = new Error("El Usuario ya esta registrado");
     return res.status(400).json({ msg: error.message });
   }
  try {
    const user = new Users(req.body);
    user.token = generarId();
    await user.save();
    res.json({msg:'Registration successful!'});
  } catch (error) {
    console.log(error);
  }
};


const autenticar = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const usuario = await Users.findOne({ email });
  if (!usuario) {
    const error = new Error("El Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  //Comprobar su password
  if (await usuario.comprobarPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.name,
      email: usuario.email,
      token: generarJWT(usuario._id),
    });
  } else {
    const error = new Error("El Password es Incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await Usuario.findOne({ token });
  if (!usuarioConfirmar) {
    const error = new Error("Token no válido");
    return res.status(403).json({ msg: error.message });
  }

  try {
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario Confirmado Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  RegisterUser,
  autenticar,
  confirmar
};
