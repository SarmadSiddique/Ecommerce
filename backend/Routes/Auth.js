const express = require('express');
const router = express.Router();
const User = require("../Models/UserSchema");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const checkAuth = require("./Verifytoken")
// const checkAuth = require("Verfifytoken.js")
// console.log(jwt);
// Registeration of user-----
router.post("/register", (req, res, next) => {
    // message:"user is registered successfully...!"
    const newUser = new User({
        // _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
        // password: CryptoJS.AES.encrypt(req.body.password,process.env.Pass_Sec).toString(),
    });
    newUser.save().then((result) => {
        // console.log(newUser);
        res.status(200).json({
            newUser: result
        })
    }).catch((error) => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
})
// login user-----
router.post("/login",async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username , pass:req.body.password })
        !user && res.status(401).json({
            message: "wrong credential"
        })
        const {password, ...others} = user._doc;
        // res.status(200).json(others)
        // const password = await User.findOne({ password: req.body.password })
        // !password && res.status(401).json({
        //     message: "user password does not match"
        const token=jwt.sign({
            username:others.username,
            email:others.email,
            id:others._id,
            isAdmin:others.isAdmin  
        },
            "this is secret code",
        {
            expiresIn:"24h"
            
        })
        user && res.status(200).json({...others,token})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// get request----
router.get("/" , (req,res,next)=>{
   
User.find().then(result=>{
    res.status(200).json({
        getData:result
    })
}).catch(err=>{
    res.status(500).json({
        err:err
    })
})
})
// get request by id----
router.get("/:id",checkAuth , (req,res,next)=>{
   
    User.findById(req.params.id).then(result=>{
        res.status(200).json({
            getData:result
        })
    }).catch(err=>{
        res.status(500).json({
            err:err
        })
    })
    })

module.exports = router