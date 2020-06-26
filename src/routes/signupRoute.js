const express = require('express');

const signupRouter=express.Router();
// const validate=require('./js/login.js');

function router(nav)
{
    signupRouter.get('/',(req,res)=>{
        res.render('signUp',{
            nav
        });
    });

    return signupRouter;

}
module.exports=router;