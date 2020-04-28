const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema ({
    num:{
        type: Number,
        require:true,
        // unique: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    name: {
      type: String,
      require:true,
    },    
    tel: {
      type:String
    },
    title: {
      type: String
    },     
    text:{
        type: String,
        require:true
    },
    perf: {
       type: String
    },
     status: {
      type: String
    },

}) 

module.exports = mongoose.model('ticket', ticketSchema)