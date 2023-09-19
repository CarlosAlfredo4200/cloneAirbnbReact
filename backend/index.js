const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const conectarDB = require('./config/db.js');

const port = 4000;
app.use(express.json());
dotenv.config();


var whitelist = ['http://localhost:5173']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get("/test", cors(corsOptions), (req, res, next) => {
  res.send("Test OK!");
});


app.post('/register', cors(corsOptions), (req,res, next) =>{
    const {name, email, password} = req.body;
    res.json({name, email, password})
})



conectarDB();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
