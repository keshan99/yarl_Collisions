var cart1 = document.querySelector("#cart1");
var pos1 = 12;
var cart1postxt = document.querySelector("#pos1txt");
var cart2postxt = document.querySelector("#pos2txt");
var cart2 = document.querySelector("#cart2");
var pos2 = 45;

var a1 = document.querySelector("#acc1");
var a2 = document.querySelector("#acc2");

var title = document.querySelector("#title");
var track = document.querySelector("#track");
var fin = false;

var m1 = document.querySelector("#mass1");
var m2 = document.querySelector("#mass2");

var collision = false;
var elastic = false;

var v2Con = document.querySelector("#varient");
var eCon = document.querySelector("#elastic-con");
var v1txt = document.querySelector("#v1txt");
var v1eq = document.querySelector("#v1eq");
var brk = false;

m1.value = 1;
m2.value = 1;

function cancelIt() {
  brk=true;
}
function clicked() {
  fin = false;
  run();
}

function updatepos1() {
  pos1 += parseFloat(a1.placeholder);
  //pos1 = pos1.toFixed(2);
  cart1.style.left = pos1 + "vw";
  cart1postxt.placeholder = pos1.toFixed(2);
}

function updatepos2() {
  pos2 += parseFloat(a2.placeholder);
  //pos2 = pos2.toFixed(2);
  cart2.style.left = pos2 + "vw";
  cart2postxt.placeholder = pos2.toFixed(2);
}