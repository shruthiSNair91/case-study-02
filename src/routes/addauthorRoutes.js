const express = require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/AuthorData');

function router(nav)
{
    addauthorRouter.get('/',(req,res)=>{
        res.render('addAuthor',
        {
            nav
        });
    });
    addauthorRouter.post('/add',function(req,res){
                  var item={
                            name: req.body.name,
                            genre: req.body.genre,
                            desc: req.body.desc,
                            img: req.body.img
                } 
       var author= Authordata(item);
       author.save();
       res.redirect('/author')      ;
                                                });

        

    return addauthorRouter;
}

module.exports=router;