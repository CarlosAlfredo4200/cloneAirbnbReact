require('dotenv').config();
const express = require("express");
const cors = require("cors");
const conectarDB = require('./config/db.js');
const app = express();



// app.use(express.json());

 

// Routing
const port = process.env.PORT;
 


const whitelist = ['http://localhost:4000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
              callback(new Error('Not allowed by CORS'))
            }
          }
        }
        
        //Routing
 
        
        
        // app.get("/test", (req, res, next) => {
//   res.send("Test OK!");
// });







conectarDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
