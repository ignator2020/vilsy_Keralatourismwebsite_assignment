let fname = document.getElementById("fname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let rpwd = document.getElementById("rpwd");

let fnameError = document.getElementById("fnameError");
let phError = document.getElementById("phError");
let emailError = document.getElementById("emailError");
let pwderror = document.getElementById("pwderror");
let rpwdError = document.getElementById("rpwdError");

function validate(){
    // let phnum = /^\d{10}$/;
    let phnum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // let phnumf=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pwdexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(fname.value == ""||phone.value ==""||email.value == ""||pwd.value == ""||rpwd.value == ""){
            alert("Fields cannot be empty");
            return false;
    }
    else if(!phone.value.match(phnum)){
            phError.innerHTML = "**Please add a valid phone number";
            phError.style.color = "red";
            phone.style.border = "red";
            return false;
    }
    else if(!emregexp.test(email.value)){
            emailError.innerHTML = "**Please add a valid email address";
            emailError.style.color= "red";
            email.style.border = "2px solid red";   
            return false;
    }
    else if(!pwd.value.match(pwdexp)){
        pwderror.innerHTML = "**Password must be between 8 to 15 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        pwderror.style.color = "red";
        phone.style.border = "2px solid red";
        return false;
    }
    else if(pwd.value != rpwd.value){
        rpwdError.innerHTML = "**Password doesn't match";
        rpwdError.style.color = "red";
        rpwd.style.border = "2px solid red";
        return false;
    }

    else{
        return true;
    }
}

const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
let regExpweak = /[a-z]/;
let regExpmedium = /\d+/;
let regExpstrong = /.[!,@,#,$,%,^,&,*,_,~,-,(,)]/;

function trigger(){
    if(input.value !=""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(input.value.length <= 3 && (input.value.match(regExpweak) || input.value.match(regExpmedium) || input.value.match(regExpstrong)))no=1;
        if(input.value.length >= 6 && (input.value.match(regExpweak) || input.value.match(regExpmedium) || input.value.match(regExpstrong)))no=1;
    }
    else{
        indicator.style.display = "none";
    }
}

function toggle(){
    if(phone.value.match(phnum)){
            phError.innerHTML = "";
            phError.style.display = "none";
            phone.style.border = "lightgrey";
            
    }
    else if(emregexp.test(email.value)){
            emailError.innerHTML = "";
            emailError.style.display= "none";
            email.style.border = "black";
    }
    else if(pwd.value.match(pwdexp)){
        pwderror.innerHTML = "";
        pwderror.style.display = "none";
        pwd.style.border = "black";
    }
    else if(pwd.value == rpwd.value){
        rpwdError.innerHTML = "";
        rpwdError.style.display = "none";
        rpwd.style.border = "black";
    }
    
}