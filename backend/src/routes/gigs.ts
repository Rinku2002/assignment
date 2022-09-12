const ex=require('express');
const route=ex.Router();
const DataB=require('../config/database');
const gig=require('../models/Gig')

route.use(ex.json());

route.post('/insert',(req,res,next)=>{
    gig.create(req.body)
    .then(gig=>{
        console.log(gig)
        res.send('Inserted');
    })
    .catch(err=>console.log(err));
})
module.exports=route