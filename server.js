//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const path = require('path');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require('./config/database');
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const logger = require('morgan')
const MongoStore = require('connect-mongo')(session)
const mainRoutes = require('./routes/main')
const collectionRoutes = require('./routes/collection')

// const TodoTask = require("./models/TodoTask");

require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//Set Routes
app.use('/', mainRoutes)
app.use('/collection', collectionRoutes)

//Start Server
app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})    