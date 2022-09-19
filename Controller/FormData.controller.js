const express = require('express');
const router = express.Router()
const FormData = require("../Model/FormData.model")

router.post("",async(req,res)=>{
    try {
        const formData = await FormData.create(req.body);
        res.send(formData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try {
        const formData  = await FormData.find().lean().exec();
        res.send(formData)
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const formData = await FormData.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.send(formData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const formData  = await FormData.findByIdAndDelete(req.params.id);
        return res.send(formData)
    } catch (err) {
        return res.status(500).send(err.message)
    }
    })
module.exports=router