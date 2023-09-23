require('dotenv').config();
const express = require("express");
const cors = require("cors");
const conectarDB = require('./config/db.js');
const app = express();

const userRoutes = require('./routes/usersRoutes.js');

app.use(express.json());

 

// Routing
const port = process.env.PORT;
 

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

app.use('/api/users', userRoutes); 




conectarDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
