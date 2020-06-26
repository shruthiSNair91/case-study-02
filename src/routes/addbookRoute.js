const express = require('express');
const addbookRouter=express.Router();
const Bookdata=require('../model/BookData');

function router(nav)
{
    addbookRouter.get('/',(req,res)=>{
        res.render('addBook1',
        {
            nav
        });
    });
    addbookRouter.post('/add',function(req,res){
                  var item={
                            title: req.body.title,
                            author: req.body.author,
                            genre: req.body.genre,
                            image: req.body.image
                } 
       var book= Bookdata(item);
       book.save();
       res.redirect('/books')      ;
                                                });

    return addbookRouter;
}

module.exports=router;