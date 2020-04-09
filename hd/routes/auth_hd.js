const express = require('express')
const controller = require ('../controllers/auth_hd')
const router = express.Router()

//http://localhost:5000/hd/auth/login
router.post('/login', controller.login)
router.post('/reg', controller.reg)

module.exports = router