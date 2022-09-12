const express=require('express');
const exphbs=require('express-handlebars');
const path=require('path');
// const { Sequelize } = require('sequelize');
const cors=require('cors')

const app=express();
const port=5000;

const db=require('./config/database')

db.authenticate()
.then(()=>console.log("Database connected"))
.catch(err=>console.log('Error'+err))

app.use(cors())

app.use('/api',require('./routes/gigs'))
app.use('/api2',require('./routes/users'))

app.listen(port,() =>{
    return console.log('server is running on 5000')
})