const express = require('express');

const signRouter=express.Router();
// const validate=require('./js/login.js');

function router(nav)
{
    signRouter.get('/',(req,res)=>{
        res.render('signin',{
            nav
        });
    });

    return signRouter;

}


module.exports=router;