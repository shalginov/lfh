const express = require('express')
const mongoose = require ('mongoose')
const passport = require ('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const authRoutes_hd = require('./routes/auth_hd')
const ticketRoutes = require('./routes/ticket')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const keys = require ('./config/keys')
const app = express()



// const MongoClient = require('mongodb').MongoClient;
// const uri = keys.mongoURI;
// const client = new MongoClient(uri, { useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// })
   
mongoose.set('useFindAndModify', false);
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use('/uploads',express.static('uploads'))
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

app.use('/hd/auth', authRoutes_hd)
app.use('/hd/ticket', ticketRoutes)


module.exports = app