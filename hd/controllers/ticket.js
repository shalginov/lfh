const Ticket = require('../models/Ticket')
const errorHandler = require('../utils/errorHandler')

module.exports.add = async function (req, res){
    try {
        const maxNum = await Ticket.findOne().sort({date: -1})
            
        const ticket = await new Ticket ({
            success:true,
            message:'Заявка создана',
           num: maxNum ? maxNum.num +1 : 0,
           header: req.body.header,
           text: req.body.text           
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
            const orders = await Ticket
            .find()
            .sort({date: -1})
            // .skip(+req.query.offset)
            // .limit(+req.query.limit)
    
            res.status(200).json(orders)
    } catch (error) {
        errorHandler(error)
    }
}
