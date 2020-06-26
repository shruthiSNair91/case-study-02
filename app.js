const express = require('express');

const app = new express();

const nav=[
            {link:'/books',name:'Books'},
            {link:'/author',name:'Authors'},
            {link:'/admin',name:'Add Book'},
            {link:'/addauthor', name:'Add Author'},
            {link:'/signin',name:'Sign In'},
            {link:'/signup',name:'Sign Up'}
        ];

const bookRouter=require('./src/routes/booksRoute')(nav);
const authorsRouter=require('./src/routes/authorsRoute')(nav);
const signRouter=require('./src/routes/signinRoute')(nav);
const signupRouter=require('./src/routes/signupRoute')(nav);
const addbookRouter=require('./src/routes/addbookRoute')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use (express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',bookRouter);
app.use('/author',authorsRouter);
app.use('/signin',signRouter);
app.use('/signup',signupRouter);
app.use('/admin',addbookRouter);
app.use('/addauthor',addauthorRouter);

app.get('/',function(req,res){
    res.render('welcome',
                {
                 nav,
                 title:'Library'
                });
});



app.listen(9000);
console.log("Server ready at port : 9000");