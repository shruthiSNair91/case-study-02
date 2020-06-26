let email=document.getElementById("email");
let phone=document.getElementById("phone");
let pwd=document.getElementById("pwd");
var pwdConf=document.getElementById("pwdConfirm");
var emailErr=document.getElementById("emailErr");
var phoneErr=document.getElementById("phoneErr");
var pwdErr=document.getElementById("pwdErr");
var pwdStrengthMsg=document.getElementById("pwdStrengthMsg");
var pwdConfirmErr=document.getElementById("pwdConfirmErr");
var strengthbar = document.getElementById("pwdMeter");

pwd.addEventListener("keyup", function() {
    validatePassword(pwd.value);
  });

function validateEmail()
{
    let f=1;
    let regExp=/^([A-Za-z0-9\._]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regExp.test(email.value) && email.value!="")
    {
        emailErr.innerHTML="✓ Valid Email Address";
        emailErr.style.color="green";
        emailErr.style.fontWeight="bold";
        return true;
    }
    else
    {
         emailErr.innerHTML="✖ Invalid Email Address";
         emailErr.style.color="red";
         emailErr.style.fontWeight="bold";
         f=0;
        //  email.innerText="";
        //  return false;
    }
    
    return false;
}
function validatePhone()
{
    var num =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.value.match(num))
    {
        phoneErr.innerText="✓ Valid Format";
        phoneErr.style.color="green";
        phoneErr.style.fontWeight="bold";
        return true;
    }
    else{
        phoneErr.innerText="✖ Invalid Format";
        phoneErr.style.color="red";
        phoneErr.style.fontWeight="bold";
        return false;
    }
}

function validatePassword(password)
{
   strengthbar.style.visibility="visible";
    var strength = 0;
    var passValue = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
        passValue += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
        passValue += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
        passValue += 1;
    }

    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }

    switch (strength) {
        case 0:
          strengthbar.value = 0;
          pwdStrengthMsg.innerHTML = "Very Poor";
          pwdStrengthMsg.style.color = "red";
          pwdStrengthMsg.style.fontWeight="bold";
          break;
    
        case 1:
          strengthbar.value = 25;
          pwdStrengthMsg.innerHTML = "Poor";
          pwdStrengthMsg.style.color = "palevioletred";
          pwdStrengthMsg.style.fontWeight="bold";
          break;
    
        case 2:
          strengthbar.value = 50;
          pwdStrengthMsg.innerHTML = "Medium";
          pwdStrengthMsg.style.color = "orange";
          pwdStrengthMsg.style.fontWeight="bold";
          break;
    
        case 3:
          strengthbar.value = 75;
          pwdStrengthMsg.innerHTML = "Strong";
          pwdStrengthMsg.style.color = "yellowgreen";
          pwdStrengthMsg.style.fontWeight="bold";
          break;
    
        case 4:
          strengthbar.value = 100;
          pwdStrengthMsg.innerHTML = "Very Strong";
          pwdStrengthMsg.style.color = "green";
          pwdStrengthMsg.style.fontWeight="bold";
          break;
      }
      
      if(password.length == 0) {
          pwdErr.innerHTML = "";
          strengthbar.style.visibility="hidden";
          pwdStrengthMsg.innerHTML = "";
      }

      if (password.length < 8 && password.length !==0) {
          pwdErr.innerHTML = "minimum password length is 8";
      }

      if(password.length > 8 && password.length < 15)
      { 
          pwdErr.innerHTML = "";
          passValue += 1;
      }

      if (password.length > 15) {
          pwdErr.innerHTML = "maximum password length is 15";
      }

    if (password.length !=0 && 4 == passValue)
    {
        pwdErr.innerHTML = "✓ Valid Password";
        pwdErr.style.color="green";
        return true;
    }
    else if (password.length !=0)
    {
        pwdErr.innerHTML = "Password must have 8 characters and atleast one uppercase, one lowercase and a number";
        pwdErr.style.color = "red";
        pwdErr.style.fontWeight = "bold";
    }
    return false;
}

function validateConfirmPwd()
{
    if(pwdConf.value=="")
    {
        pwdConfirmErr.innerHTML="";
    }
    else if (pwd.value == pwdConf.value) 
    {
        pwdConfirmErr.innerText = "✓ Password Matches";
        pwdConfirmErr.style.color="green";
        pwdConfirmErr.style.fontWeight="bold";
        return true;
    }
    else{
        pwdConfirmErr.innerText = "✖ Password doesn't match";
        pwdConfirmErr.style.color="red";
        pwdConfirmErr.style.fontWeight="bold";
        pwdConfirmErr.style.fontFamily="cursive";
    }
      return false;
}

function cancelSignup()
{
  window.location = "/";
  return false;
}

function validateAll()
{
    var emailResult = validateEmail();
    var pwdResult = validatePassword(pwd.value);
    var confirmPwdResult = validateConfirmPwd();
    var phoneResult = validatePhone();

    if (emailResult && pwdResult && confirmPwdResult && phoneResult)
    {
        return true;
    }
    else
    {
        alert("Please fill the valid details");
        return false;
    }
}
