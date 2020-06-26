    
document.getElementById("login").addEventListener(onclick,validate);

function validate()
{
    var uname= document.getElementById("username").value;
    var pwd=document.getElementById("password");
    var errorUnames= document.getElementById("errorUname");
    var errorPwd=document.getElementById("errorPswd");

    const regExp=/^([A-Za-z0-9\ _.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //let regExp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var uname= document.getElementById("username").value;
    if(uname.match(regExp))
    //if(regExp.test(uname.value) && uname.value!="")
    { 
        if(pwd.value.trim()!="")
        {
            return true;
        }
        else
        {
            
            errorPwd.innerHTML="✖ Invalid Password";
            errorPwd.style.color="red";
            errorPwd.style.fontWeight="bolder";
            return false;
        }
    }
    else
    {
        errorUname.innerHTML="✖ Invalid Username";
        errorUname.style.color="red";
        errorUname.style.fontWeight="bolder";
        return false;
    }
   return false;
}