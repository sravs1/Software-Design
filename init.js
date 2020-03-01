//Validtion Code For Inputs

var fullname = document.forms['form']['fullname'];
var address1 = document.forms['form']['address1'];
var city = document.forms['form']['city'];
var zipcode = document.forms['form']['zipcode'];
var state = document.forms['form']['state'];

var fullname_error = document.getElementById('fullname_error');
var address1_error = document.getElementById('address1_error');
var city_error = document.getElementById('city_error');
var zipcode_error = document.getElementById('zipcode_error');
var state_error = document.getElementById('state_error');


fullname.addEventListener('textInput', fullname_Verify);
address1.addEventListener('textInput', address1_Verify);
city.addEventListener('textInput', city_Verify);
zipcode.addEventListener('textInput', zipcode_Verify);
state.addEventListener('textInput', state_Verify);

function validated(){
if (fullname.value.length == 0 && address1.value.length == 0 && city.value.length==0 && zipcode.value.length==0 && state.value=="none"){
  fullname.style.border = "1px solid red";
  fullname_error.style.display = "block";
  fullname.focus();
  address1.style.border = "1px solid red";
  address1_error.style.display = "block";
  address1.focus();
  city.style.border = "1px solid red";
  city_error.style.display = "block";
  city.focus();
  zipcode.style.border = "1px solid red";
  zipcode_error.style.display = "block";
  zipcode.focus();
  state.style.border = "1px solid red";
  state_error.style.display = "block";
  state.focus();
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
if (zipcode.value.length == 0 || zipcode.value.length>9) {
  zipcode.style.border = "1px solid red";
  zipcode_error.style.display = "block";
  zipcode.focus();
  return false;
}
if (state.value.length == 0 || state.value.length>2) {
  state.style.border = "1px solid red";
  state_error.style.display = "block";
  state.focus();
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
function zipcode_Verify(){
if (zipcode.value.length >= 5) {
  zipcode.style.border = "1px solid silver";
  zipcode_error.style.display = "none";
  return true;
}
}
function state_Verify(){
  console.log("entering her");
  console.log(state.value);
  console.log(state.value.length);
if (state.value.length == 2) {
  state.style.border = "1px solid silver";
  state_error.style.display = "none";
  return true;
}
}
