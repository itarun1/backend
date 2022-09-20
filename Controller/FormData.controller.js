const express = require('express');
 const authenticate = require('../Middleware/authenticate');
const router = express.Router()
const FormData = require("../Model/FormData.model")

router.post("",authenticate,async(req,res)=>{
    try {
        const formData = await FormData.create(req.body);
        res.send(formData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("",authenticate,async(req,res)=>{
    try {
        const formData  = await FormData.find().lean().exec();
        res.send(formData)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})
router.patch("/:id",authenticate,async(req,res)=>{
    try {
        const formData = await FormData.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.send(formData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.delete("/:id",authenticate,async(req,res)=>{
    try {
        const formData  = await FormData.findByIdAndDelete(req.params.id);
        return res.send(formData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
    })
module.exports=router