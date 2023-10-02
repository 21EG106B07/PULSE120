const mongoose = require('mongoose');
var contactSchema = new mongoose.Schema(
    {
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type:Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
}
)
module.exports = {contactSchema};