const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://alfredomontoyacorreo2:juanma4200@cluster0.gjsff5i.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB Conectado en: ${url} `);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;