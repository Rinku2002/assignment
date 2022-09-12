const sequelize=require('sequelize');
const DB=require('../config/database')

const Gig=DB.define('answers',{
    q1:{
        type:sequelize.STRING
    },
    q2:{
        type:sequelize.STRING
    },
    q3:{
        type:sequelize.STRING
    },
    q4:{
        type:sequelize.STRING
    },
    q5:{
        type:sequelize.STRING
    }
});

// Gig.sync().then(()=>{
//     console.log('table created')
// });

module.exports=Gig;