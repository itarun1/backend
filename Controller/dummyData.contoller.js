const express = require('express');
 const authenticate = require('../Middleware/authenticate');
const router = express.Router()
const DummyData=require("../Model/dummydata.model")

router.get("",authenticate,async(req,res)=>{
    try {
        const dummyData  = await DummyData.find().lean().exec();
        res.status(200).send(dummyData)
    
    } catch (err) {
        return res.status(500).send(err.message)
    }
})
router.post("",async(req,res)=>{
    try {
        const dummyData  = await DummyData.create(req.body)
        res.status(200).send(dummyData)
    
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

module.exports=router