const express = require('express');

const bookRouter=express.Router();
const Bookdata=require('../model/BookData');
function router(nav)
{
    // var books=[
    //     {
    //         title:'Believe In Yourself',
    //         author:'Joseph Murphy',
    //         genre:'Self-Help',
    //         img:'believe_in_urself.jpeg'
    //     },
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Comic-Cartoon',
    //         img:'tom.jpeg'
    //     },
    //     {
    //         title:'Wings of Fire ',
    //         author:'A P J Abdul Kalam',
    //         genre:'Biograpghy',
    //         img:'apj.jpeg'
    //     },
    //     {
    //         title:'War and Peace ',
    //         author:'Leo Tolstoy',
    //         genre:'Novel',
    //         img:'war&peace.jpg'
    //     }
    
    // ];

    bookRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then((books)=>{
                 res.render('books1',{
                nav,
                title:'Library',
                books
            });
        });
     
        });
    bookRouter.get('/:id',(req,res)=>{
                const id=req.params.id;
                Bookdata.findOne({_id:id})
                .then(function(book){
                        res.render('SingleBook',{
                        nav,
                        title:'Library',
                        book
                })
               
            });
    });
    
    return bookRouter;
}

module.exports=router;