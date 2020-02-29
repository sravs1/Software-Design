//Validtion Code For Inputs

var fullname = document.forms['form']['fullname'];
var address1 = document.forms['form']['address1'];
var city = document.forms['form']['city'];

var fullname_error = document.getElementById('fullname_error');
var address1_error = document.getElementById('address1_error');
var city_error = document.getElementById('city_error');


fullname.addEventListener('textInput', fullname_Verify);
address1.addEventListener('textInput', address1_Verify);
city.addEventListener('textInput', city_Verify);


function validated(){
if (fullname.value.length == 0 && address1.value.length == 0 && city.value.length==0){
  fullname.style.border = "1px solid red";
  fullname_error.style.display = "block";
  fullname.focus();
  address1.style.border = "1px solid red";
  address1_error.style.display = "block";
  address1.focus();
  city.style.border = "1px solid red";
  city_error.style.display = "block";
  city.focus();
  return false;

}
if (fullname.value.length == 0 || fullname.value.length>50) {
  fullname.style.border = "1px solid red";
  fullname_error.style.display = "block";
  fullname.focus();
  return false;
}
if (address1.value.length == 0 || address1.value.length>100) {
  address1.style.border = "1px solid red";
  address1_error.style.display = "block";
  address1.focus();
  return false;
}
if (city.value.length == 0 || city.value.length>100) {
  city.style.border = "1px solid red";
  city_error.style.display = "block";
  city.focus();
  return false;
}
}

function fullname_Verify(){
if (fullname.value.length <= 50) {
  fullname.style.border = "1px solid silver";
  fullname_error.style.display = "none";
  return true;
}
}
function address1_Verify(){
if (address1.value.length <= 100) {
  address1.style.border = "1px solid silver";
  address1_error.style.display = "none";
  return true;
}
}
function city_Verify(){
if (city.value.length <= 100) {
  city.style.border = "1px solid silver";
  city_error.style.display = "none";
  return true;
}
}
