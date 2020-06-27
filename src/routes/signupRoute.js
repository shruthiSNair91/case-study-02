const express = require('express');
const Signupdata = require('../model/SignupData');

const signupRouter=express.Router();


function router(nav)
{
    signupRouter.get('/',(req,res)=>{
        res.render('signUp',{
            nav
        });
    });

    signupRouter.get('/add',(req,res)=>{
    var item={
                email: req.query.email,
                phone: req.query.phone, 
                pwd: req.query.pwd,
                pwdConfirm: req.query.pwdConfirm
            }
            var signupdata= Signupdata(item);
            signupdata.save();
             res.redirect('/signin');
    });
    


    return signupRouter;

}
module.exports=router;