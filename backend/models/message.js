var mongoose = require("mongoose");
var Schema = mongoose.Schema

const messageSchema = new Schema({
    name:{

        type: Schema.Types.Mixed,
        required: true
    },
    message:{
        type: Schema.Types.Mixed,
        required: true

    }
})

var Message = mongoose.model("Message",messageSchema)

module.exports = Message