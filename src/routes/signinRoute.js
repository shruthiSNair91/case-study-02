const express = require('express');
const Signupdata = require('../model/SignupData');
const signindata=require('../model/SignInData');
const signRouter=express.Router();

function router(nav)
{
    signRouter.get('/',(req,res)=>{
        res.render('signin',{
            nav
        });
    });

    signRouter.get('/valid',function(req,res){
        Signupdata.findOne({email:req.query.username},{pwd:req.query.password})
        .then(function(data){
                console.log(data);
                                if(!data)
                                {
                                    res.redirect('/signin');
                                }
                                else
                                {
                                      var item={
                                          username:req.query.username,
                                          password:req.query.password
                                         }
                                         var signin=signindata(item);
                                         signin.save();
                                         res.redirect('/');
                                                                     
                                }
                            })
                        })

   

    return signRouter;

}


module.exports=router;