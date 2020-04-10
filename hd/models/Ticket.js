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
      type: String,        
    },
    text:{
        type: String,
        require:true
    },
    perf: {
        ref: 'users_hd',
        type: Schema.Types.ObjectId
    }

}) 

module.exports = mongoose.model('ticket', ticketSchema)