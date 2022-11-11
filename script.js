// Firstname validation
function fname_val(){
    var fname = document.getElementById('firstname').value;
    var input = document.getElementById('firstname');
    var check = document.getElementById('fcheck');
    fname == "" ? input.setAttribute("value","This field is empty") : check.style.display = "block";
    fname == "" ? input.setAttribute("class","animate__animated animate__bounce animate__infinite infinite") : check.style.display = "block";
    fname == "" ? input.style.color = "#ff0000" : check.style.display = "block";
    fname == "" ? input.style.border = "1px solid #ff0000" : check.style.display = "block";
}

function fname_val_close(){
    var fname = document.getElementById('firstname').value;
    var input = document.getElementById('firstname');
    var check = document.getElementById('fcheck');
    fname == "This field is empty" ? input.setAttribute("value","") : check.style.display = "block";
    fname == "This field is empty" ? input.setAttribute("class","") : check.style.display = "block";
    fname == "This field is empty" ? input.style.color = "#000000" : check.style.display = "block";
    fname == "This field is empty" ? input.style.border = "1px solid #ccc" : check.style.display = "block";
}

// Lastname validation
function lname_val(){
    var lname = document.getElementById('lastname').value;
    var input = document.getElementById('lastname');
    var check = document.getElementById('lcheck');
    lname == "" ? input.setAttribute("value","This field is empty") : check.style.display = "block";
    lname == "" ? input.setAttribute("class","animate__animated animate__bounce animate__infinite infinite") : check.style.display = "block";
    lname == "" ? input.style.color = "#ff0000" : check.style.display = "block";
    lname == "" ? input.style.border = "1px solid #ff0000" : check.style.display = "block";
}

function lname_val_close(){
    var lname = document.getElementById('lastname').value;
    var input = document.getElementById('lastname');
    var check = document.getElementById('lcheck');
    lname == "This field is empty" ? input.setAttribute("value","") : check.style.display = "block";
    lname == "This field is empty" ? input.setAttribute("class","") : check.style.display = "block";
    lname == "This field is empty" ? input.style.color = "#000000" : check.style.display = "block";
    lname == "This field is empty" ? input.style.border = "1px solid #ccc" : check.style.display = "block";
}

// Mobile validation
function mobile_val(){
    var mobile = document.getElementById('mobile').value;
    var input = document.getElementById('mobile');
    var check = document.getElementById('mcheck');
    var check_digit_length = mobile == "" ? input.setAttribute("value", "This field is empty") : mobile;
    var check_digit_length = mobile == "" ? input.setAttribute("style","color: red; border: 1px solid red;") : mobile;
    var check_digit_length = mobile == "" ? input.setAttribute("class","animate__animated animate__bounce animate__infinite infinite") : mobile;
    var digit_check = check_digit_length.length == 10 ? check_digit_length : window.alert("Enter only 10 digit number");
    digit_check.charAt(0) == 9 || digit_check.charAt(0) == 8 || digit_check.charAt(0) == 7 ? check.style.display = "block" : window.alert("Please enter Indian number"); 
}

// Username validation
function uname_val(){
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var uname = document.getElementById('username');
    uname.setAttribute("value",fname+lname);
    uname.setAttribute("disabled","disabled");
}

// Email validation
function email_val(){
var email = document.getElementById('email').value;
var hint = document.getElementById('email-hint');
var input = document.getElementById('email');
var check = document.getElementById('echeck');
email.match('@') ? hint.style.display = "block" : hint.style.display = "none";
email.match('gmail.com') ? hint.style.display = "none" : hint.style.display = "block";
email.match('yahoo.com') ? hint.style.display = "none" : hint.style.display = "block";
}

function gmail(){
    var email = document.getElementById('email').value;
    var input = document.getElementById('email');
    var hint = document.getElementById('email-hint');
input.value = email + "gmail.com";
hint.style.display = "none";
}

function yahoo(){
    var email = document.getElementById('email').value;
    var input = document.getElementById('email');
    var hint = document.getElementById('email-hint');
input.value = email + "yahoo.com";
hint.style.display = "none";
}

// Remobile Validation
function remobile_val(){
    var mobile = document.getElementById('mobile').value;
    var remobile = document.getElementById('remobile').value;
    var input = document.getElementById('remobile');
    var check = document.getElementById('rmcheck');
    var check_remobile = remobile == "" ? window.alert("This field is empty") : remobile;
    check_remobile == mobile ? check.style.display = "block" : input.value = "Mobile number not matched";
}

// Password validation
function password_val(){
    var pass = document.getElementById('password').value;
    var input = document.getElementById('password');
    var check = document.getElementById('pcheck');
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var num = /[0-9]/g;
    var alpha = /[~|!|@|#|$|%|^|&|*]/g;
    var check_upper = pass == "" ? input.value = "This field is empty" : pass;
    var check_lower = check_upper.charAt(0).match(upper) ? check_upper : window.alert("First letter should be capital");
    var check_num = check_lower.match(lower) ? check_lower : window.alert("Choose atleast one lower letter");  
    var check_alpha = check_num.match(num) ? check_num : window.alert("Choose atleat one number");
    var check_length = check_alpha.match(alpha) ? check_alpha : window.alert("Choose atleat one alphanumeric");
    check_length.length >= 6 ? check.style.display = "block" : window.alert("use atleast 6 digit password");
}

// // Submit validation
function submit_val(){
   var fname = document.getElementById('firstname').value;
   var lname = document.getElementById('lastname').value;
   var mobile = document.getElementById('mobile').value;
   var remobile = document.getElementById('remobile').value;
   var email = document.getElementById('email').value;
   var uname = document.getElementById('username').value;
   var pass = document.getElementById('password').value;
   var btn = document.getElementById('submit');
   fname,lname,mobile,remobile,email,uname,pass == "" ? btn.disabled = true : btn.disabled = false;
   fname,lname,mobile,remobile,email,uname,pass == "" ? btn.disabled = true : btn.style.background = "#ff0000";
   fname,lname,mobile,remobile,email,uname,pass == "" ? btn.disabled = true : btn.style.cursor = "pointer";
}