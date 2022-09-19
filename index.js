const express=require("express")
const app=express()
const cors = require("cors")
const Connect=require("./Configs/Connect")
const { body } = require("express-validator")
const { login, Register } = require("./Controller/Auth.controller")
const FormData=require("./Controller/FormData.controller")
app.use(express.json())
app.use(cors({ origin: "*" }))

app.use("/login",
    login)

app.use("/register",
    body("name").isString().isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    Register)

    app.use("/formData",FormData)
app.listen(3003, async function(){
    try {
       await Connect()
        console.log("Listening to port 3003")
    } catch (error) {
        console.log(error.message)
    }
})