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

    if(email.value == ""||pwd.value == ""){
            alert("Fields cannot be empty");
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
        pwd.style.border = "2px solid red";
        return false;
    }
   
    else{
        return true;
    }
}


