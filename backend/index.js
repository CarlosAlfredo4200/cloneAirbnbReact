import express from 'express';

import cors from 'cors';
import dotenv from'dotenv';
import conectarDB from './config/db.js';
import userRouter from './routes/RoutesUsers.js';

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();
 
// Routing
const port = 4000;


const whitelist = ['http://localhost:5173']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
//Routing
app.use("/", userRouter);
 

// app.get("/test", (req, res, next) => {
//   res.send("Test OK!");
// });


 




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
