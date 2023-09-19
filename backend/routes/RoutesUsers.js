import express  from "express";
const router = express.Router();

import { userCtlFn } from "../controllers/userCtl.js";



router.get('/', userCtlFn);

// router.get("/test", (req, res, next) => {
//   res.send("Test OK! desde rutas");
// });


router.post('/register', (req,res) =>{
    const {name, email, password} = req.body;
    res.send({name, email, password});
    console.log({name, email, password});
    
})


export default router;