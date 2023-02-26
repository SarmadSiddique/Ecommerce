const express = require('express');
const router = express.Router();
router.get("/usertest", (req,res,next)=>{
    res.send("User Test is Successfully Done");
    console.log("i am user");
})
module.exports= router