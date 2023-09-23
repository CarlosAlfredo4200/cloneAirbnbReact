const Users = require("../models/UserModels");
const generarId = require('../utils/generarId');

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

module.exports = {
  RegisterUser,
};
