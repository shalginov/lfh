
const User = require('../models/User_hd')
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const keys = require ('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function(req, res) {
    const loginer = await User.findOne({login: req.body.login})

    if (loginer){
        //Пользовтель существует, проверка пароля
        const passwordResult = bcrypt.compareSync(req.body.password, loginer.password)
        if (passwordResult) {
          //Генерация токена, пароль совпали
          const token = jwt.sign({
            login: loginer.login,
            userId: loginer._id
          }, keys.jwt, {expiresIn: 60 * 60})
    
          res.status(200).json({
            success: true,
            message:'Вы вошли в систему',
            token: `Bearer ${token}`,
            user: {
              id: loginer._id,
              name: loginer.first_name,
              login: loginer.login
            }
          })
          
          
        } else {
          // Пароли не совпали
          res.status(401).json({
            success: false,
            message: 'password mismath'
          })
        }
      } else {
        //Пользователя нет, ошибка
        res.status(404).json({
          success: false,
          message: 'login not found'
        })
      }
    }
  

module.exports.reg = async function(req, res) {
    //login password
     const loginer = await User.findOne({login: req.body.login})
   
     if(loginer){
       //Пользователь существует, нужно отправить ошибку
       res.status(409).json({
         success: false,
         message: 'Такой логин уже есть, попробуйте другой'
       })
     } else {
       //Нужно создать пользователя
       const salt = bcrypt.genSaltSync(10)
       const password = req.body.password
       const user = new User({
        success: true,
        message: 'Пользователь создан',
         login: req.body.login,
         password: bcrypt.hashSync(password, salt),
         first_name: req.body.first_name,
         last_name: req.body.last_name,
        //  role: req.body.role
       })
   
       try{
         await user.save()
         res.status(201).json(user)
       } catch(e){
         console.log(e);
         
         // Обработать ошибку
         errorHandler(res, e)
       }

      }

    }