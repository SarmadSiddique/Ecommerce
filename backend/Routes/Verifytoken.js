const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token, 'this is secret code');
        console.log(token);
        if(verify.isAdmin==true){
            next();
        }
        else{
            res.status(401).json({
                message:"You are not admin"
            })
        }
    }
    catch(error){  
return res.status(401).json({
    msg:"Invalid Token",
    err:error
})
    }
    console.log(error)
}