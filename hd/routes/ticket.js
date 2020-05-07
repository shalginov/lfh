const express = require('express')
// const passport = require('passport')
const controller = require ('../controllers/ticket')
const router = express.Router()

// router.post('/add', passport.authenticate('jwt', {session:false}), controller.add)
// router.get('/all', passport.authenticate('jwt', {session:false}), controller.getAll)

router.post('/add', controller.add)
router.get('/all', controller.getAll)
router.patch('/upd/:id', controller.update)


module.exports = router