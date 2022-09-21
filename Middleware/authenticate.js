const jwt= require("jsonwebtoken")
const User = require("../Model/User.model");
const authenticate= async(req,res,next)=>{
    try {
        const token=req.headers.authorization.token
        const verifyToken=jwt.verify(token,process.env.JWT_KEY)
        req.userData = {
            email: verifyToken.email,
            userId: verifyToken.userId 
      };
        
        console.log(req,rootUser,"req,rootUser")
        next();
    } catch (error) {
        res.status(401).send("Unauthorized")
    }

}
module.exports=authenticate