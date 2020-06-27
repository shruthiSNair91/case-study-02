const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;

const SignupSchema=new Schema(
    {
        email: String,
        phone: String, 
        pwd: String,
        pwdConfirm: String
    }
);
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;
