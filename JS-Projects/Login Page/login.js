var a;
var count = 0;
var obj = {};
var arr = [];
var arr1 = [];
var obj1 = {};
document.getElementsByClassName("login-box")[0].style.display = "none";
var email = document.getElementsByName('email')[0];
var password = document.getElementsByName('password')[0];
var data = localStorage.getItem("registration");
var registerData = JSON.parse(data);
var data1 = localStorage.getItem("username");
var userName = JSON.parse(data1);
function changeHandler(event,type){
     console.log(event)
   if(type == "email"){
        obj['email'] = event.target.value;
   }
   else{
        obj['password'] = event.target.value;
   }
}
function clickHandler(){
     if(Object.keys(obj).length==2){
          for(var i=0;i<registerData.length;i++){
               if(obj.email == registerData[i].email && obj.password == registerData[i].password){
                    arr.push(obj);
                    localStorage.setItem("username",JSON.stringify(arr));
                    alert('login sucess');
                    document.getElementsByClassName("login-box")[0].style.display = "none";
                    spin.style.display = "block";
                    setTimeout(()=>{
                         spin.style.display = "none";
                         location.href = 'TASK2/slack.html';
                    },1000)
               }
          }
     }
     console.log(arr);
     email.value = "";
     password.value = "";
     obj = {};
   
}
var username = document.getElementsByName('username')[0];
var mailId = document.getElementsByName('mailId')[0];
var number = document.getElementsByName('number')[0];
var pass = document.getElementsByName('pass')[0];
var confirmPassword = document.getElementsByName('confirmPassword')[0];
function registerClickHandler(){
     for(var i=0;i<registerData.length;i++){
          if(registerData[i].email == mailId.value){
               count = 1;
          }
     }
     if(Object.keys(obj1).length == 5)
     {
          if( pass.value === confirmPassword.value && count == 0)
          {
               arr1.push(obj1);
               console.log(arr1);
               localStorage.setItem("registration",JSON.stringify(arr1));
               username.value = "";
               mailId.value = "";
               number.value = "";
               pass.value = "";
               confirmPassword.value = "";
               console.log(obj1);
               obj1 = {};
               alert("registered sucessfully");
          }
          else{
               alert("password mismatch or ");
               pass.value = "";
               confirmPassword.value = "";
               delete obj1.password;
               delete obj1.repass;
               console.log(obj1);
          }
     }
}
var regexPass =  /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var regexName = /^[a-zA-z ]{2,10}$/;
var regexNumber = /^[0-9]{10,}$/;
function registerChangeHandler(event,type){
     if(type == "text"){
          if(regexName.test(event.target.value))
               obj1['text'] = event.target.value;
          else
               alert("invalid username");
     }
     else if(type == "email"){
          if(regexEmail.test(event.target.value))
               obj1['email'] = event.target.value;
          else
               alert("invalid email");
     }
     else if(type == "number"){
          if(regexNumber.test(event.target.value))
               obj1['number'] = event.target.value;
          else
               alert("invalid number");
     }
     else if(type == "password"){
          if(regexPass.test(event.target.value))
               obj1['password'] = event.target.value;
          else
               alert("invalid password");
     }
     else{
          if(regexPass.test(event.target.value))
               obj1['repass'] = event.target.value;
          else
               alert("invalid password");;
     }
}
var spin = document.getElementsByClassName('spinner')[0];
function login(){
     document.getElementsByClassName("register-box")[0].style.display = "none"; 
     spin.style.display = "block";
     setTimeout(() =>{
          document.getElementsByClassName("login-box")[0].style.display = "block";
          spin.style.display = "none";
     },2000)
       
}
function register(){
     document.getElementsByClassName("login-box")[0].style.display = "none";
     spin.style.display = "block";
     setTimeout(() => {
          document.getElementsByClassName("register-box")[0].style.display = "block";
          spin.style.display = "none";
     },2000)
}
