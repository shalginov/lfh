const Ticket = require('../models/Ticket')
const errorHandler = require('../utils/errorHandler')

module.exports.add = async function (req, res){
    try {
        const maxNum = await Ticket.findOne().sort({date: -1})
            
        const ticket = await new Ticket ({
           num: maxNum ? maxNum.num +1 : 0,
           name: req.body.name,
           tel: req.body.tel,
           text: req.body.text,
           perf: req.body.perf,
           status: req.body.status           
        }).save()        
        res.status(201).json(ticket)        
    } catch (error) {
       
        
        errorHandler(res,error)        
    }
}

module.exports.getAll = async function (req, res){
   
        // const query = {
        //     user: req.user.id
        // }
        
        // //дата старта
        // if(req.query.start) {
        //     query.date = {
        //         //gratet or equel
        //         $gte: req.query.start
        //     }
        // }
    
        // if(req.query.end){
        //     if(!query.date){
        //         query.date = {}
        //     }
        //     query.date['$lte'] = req.query.end
        // }
    
        // if(req.query.order) {
        //     query.order = +req.query.order
        // }
    
        try {        
            const tickets = await Ticket
            .find()
            .sort({date: -1})
            // .skip(+req.query.offset)
            // .limit(+req.query.limit)
    
            res.status(200).json(tickets)
    } catch (error) {
        errorHandler(error)
    }
}


module.exports.update = async function(req, res) {
    const updated = {
        name: 'valasa'
        // name: req.body.name
    }
    // if(req.file){
    //     updated.imageSrc = req.file.path
    // }
    console.log('NUMBER - ' + req.body.num);
    console.log('PARAMS ID - ' + req.params.id);
    
    
    try {
        const ticket = await Ticket.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(ticket)        
    } catch (e) {
        errorHandler(res, e)        
    }
}