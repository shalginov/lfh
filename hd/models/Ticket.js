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
    first_name: {
      type: String,
      require:true,
    },
    last_name: {
      type: String      
    },
    tel: {
      type:String
    },
    header: {
      type: String
    },  
    status: {
      type: String
    },
    text:{
        type: String,
        require:true
    },
    perf: {
       type: String
    }

}) 

module.exports = mongoose.model('ticket', ticketSchema)