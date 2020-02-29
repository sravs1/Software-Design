//Validtion Code For Inputs

var email = document.forms['form']['email'];
console.log("email id is ");
console.log(email.value);

var email_error = document.getElementById('email_error');
email.addEventListener('textInput', email_Verify);

function validated(){
if (email.value.length == 0) {
  console.log("length block");
  email.style.border = "1px solid red";
  email_error.style.display = "block";
  email.focus();
  return false;
}
}
function email_Verify(){
  console.log("enterig hre");
if (email.value.length >0) {
  email.style.border = "1px solid silver";
  email_error.style.display = "none";
  return true;
}
}
