const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;

const SigninSchema=new Schema(
    {
        username: String,
        password: String
        
    }
);
var Signindata=mongoose.model('signindata',SigninSchema);
module.exports=Signindata;
