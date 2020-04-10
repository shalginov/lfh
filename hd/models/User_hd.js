const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema_hd = new Schema ({
    login:{
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        // require:true
    }
})

module.exports = mongoose.model('users_hd', userSchema_hd)