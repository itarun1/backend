const jwt= require("jsonwebtoken")
const User = require("../Model/User.model");
const authenticate= async(req,res,next)=>{
    try {
        const token=req.headers.authorization.token
        const verifyToken=jwt.verify(token,process.env.JWT_KEY)
        const rootUser=await User.findOne({_id:verifyToken._id,"token":token})
        if(!rootUser)
        {
            throw new error('User not found')
        }
        // req.token=token
        // req.user=rootUser
        // req.user._id=rootUser._id
        console.log(req,rootUser,"req,rootUser")
        next();
    } catch (error) {
        res.status(401).send("Unauthorized")
    }

}
module.exports=authenticate