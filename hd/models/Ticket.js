const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema ({
    num:{
        type: Number,
        require:true,
        unique: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    header: {
        type: String,
        require:true
    },
    text:{
        type: String,
        require:true
    },
    performer: {
        ref: 'users_hd',
        type: Schema.Types.ObjectId
    }

}) 

module.exports = mongoose.model('ticket', ticketSchema)