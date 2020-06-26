const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;

const AuthorSchema=new Schema(
        {
                name: String,
                genre: String, 
                desc: String,
                img: String
        }
);

var Authordata=mongoose.model('authordata ',AuthorSchema);

module.exports= Authordata;