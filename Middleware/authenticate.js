const jwt= require("jsonwebtoken")
const User = require("../Model/User.model");
const authenticate= async(req,res,next)=>{
    try {
        let token=req.headers.authorization
        console.log(token,"thiss is 11")
        token=token.split(" ")[1]
        console.log(token,"here is token")
        const verifyToken=jwt.verify(token,process.env.JWT_KEY)
        console.log(verifyToken,"verifying")
        const rootUser=await User.findOne({_id:verifyToken.user._id})
        console.log(rootUser,"root")
        if(!rootUser)
        {
            throw new error('User not found')
        }
        req.body.user=rootUser
        next();
    } catch (error)
    {
        res.status(401).send("Unauthorized")
    }

}
module.exports=authenticate