const express = require('express');
const router = express.Router()
const Message = require('../models/message')


// router.use(express.json())
router.get('/',(req,res)=>{
    res.send("Welcome to my API.")
})

router.post('/message',(req,res)=>{
    const data = req.body
    try{
        Message.create(data).then((result)=>{
            res.json(result)
        })    
    }
    catch(e){
        console.log(e)
        res.status(400).send("error in json")
    }
})


router.get('/message/all',(req,res)=>{
    Message.find({}).then((messages)=>{
        res.json(messages)
    })
    
})




router.get('/message/:messageId',(req,res)=>{
    let messageId = req.params.messageId
    console.log(messageId)
    Message.find({_id:messageId}).then((messages)=>{
        res.json(messages)
    })
    
})


module.exports = router
