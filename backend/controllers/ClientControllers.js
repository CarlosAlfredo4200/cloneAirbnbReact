const Usuario = require('../models/Users');
const generarId = require('../utils/generarId');


const registrar = async (req, res) => {
    // Evitar registros duplicados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });
  
    if (existeUsuario) {
      const error = new Error("Usuario ya registrado");
      return res.status(400).json({ msg: error.message });
    }
  
    try {
      const usuario = new Usuario(req.body);
      usuario.token = generarId();
      await usuario.save();
  
      // Enviar el email de confirmacion
      emailRegistro({
        email: usuario.email,
        nombre: usuario.nombre,
        token: usuario.token,
      });
  
      res.json({
        msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu cuenta",
      });
    } catch (error) {
      console.log(error);
    }
  };