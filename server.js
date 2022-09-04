//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const path = require('path');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main')
// const todoRoutes = require('./routes/todos')

//const TodoTask = require("./models/TodoTask");

require('dotenv').config({ path: './config/.env' })

connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Set Routes
app.use('/', mainRoutes)
// app.use('/edit', editRoutes)

//Start Server
app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})    