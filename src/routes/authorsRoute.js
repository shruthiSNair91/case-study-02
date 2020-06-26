const express = require('express');
const authorsRouter=express.Router();
const Authordata=require('../model/AuthorData');
const { application } = require('express');
function router(nav)
{
    
    authorsRouter.get('/', (req,res)=>{
        Authordata.find()
        .then(function(authors){
            res.render('authors1',
            {    
                nav,
                title:'Library',
                authors
            });
        });
        })
   
    
    authorsRouter.get('/:id', (req,res)=>{
                    const id= req.params.id;
                    Authordata.findOne({_id:id})
                    .then((aid)=>{
                        res.render('SingleAuthor',
                        {
                            nav,
                            title:'Library',
                            aid  
                        });
                    })
        });

     authorsRouter.get('/update/:id',(req,res)=>{

        const id= req.params.id;
        
         Authordata.findById({_id:id})
         .then((author)=>{
            res.render('updateAuthor',
            {
                nav,
                title:'Library',
                author
            });
         });
        }); 


        authorsRouter.get('/save/:id',function(req,res){
            
            const id= req.params.id;
            Authordata.findByIdAndUpdate({_id:id}, {$set: {"name" : req.query.name, "genre": req.query.genre, "desc": req.query.desc, "img": req.query.img}})
            .then((aid)=>{
                res.render('SingleAuthor',
                {
                    nav,
                    title:'Library',
                    aid
                });
            })

        });
        
        authorsRouter.get('/delete/:id',function(req,res){
            const id= req.params.id;
            Authordata.findByIdAndDelete({_id:id})
            .then(()=>{
                // 
                res.send("File deleted..");
            })
        });
//             var item={
//                         name: req.body.name,
//                         genre: req.body.genre,
//                         desc: req.body.desc,
//                         img: req.body.img
//             } 
//         Authordata.updateOne(item);
// //            var author= Authordata(item);
// //        author.save();
//         res.redirect('/author');


    return authorsRouter;
}

module.exports=router;