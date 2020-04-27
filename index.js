
const mongoose= require('mongoose');
const express = require('express');
const messageModel = require('./models/message.js');

const path = require('path');
const parseurl = require('parseurl');
const expressValidator = require('express-validator');

const mongo_url = "mongodb://127.0.0.1:27017/messages"
mongoose.connect(mongo_url)

const app = new express()
const port = 3000;
const apiRouter  = require("./routers/router");

app.use(express.json())
app.use('/api',apiRouter)

app.listen(port)



// var newMessage = new messsageModel({
//     name:"taha",
//     message:"doing a great job buddy, keep it up"
// })





