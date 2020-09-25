var cart1 = document.querySelector("#cart1");
var pos1 = 12;
var cart1postxt = document.querySelector("#pos1txt");
var cart2postxt = document.querySelector("#pos2txt");
var cart2 = document.querySelector("#cart2");
var pos2 = 45;

var a1 = document.querySelector("#acc1");
var a2 = document.querySelector("#acc2");
var a0 = document.querySelector("#acc1a");
a1.placeholder=parseFloat(a0.value);

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

function clicked() {
  fin = false;
  a1.placeholder = a0.value;
  run();
}

async function run() {
  track.style.background = "lightslategray";
  while (validpos()) {
    updatepos1();
    if (document.getElementById("elastic").checked && collision == false) {
      //elastic
      title.innerHTML = "Elastic";
      if (pos1 > pos2 - 6) {
        var v1 = ((m1.value - m2.value) / (m1.value + m2.value)) * a1.placeholder;
        var v2 = ((2 * m1.value) / (m1.value + m2.value)) * a1.placeholder;
        a1.placeholder = v1.toFixed(2);
        a2.placeholder = v2.toFixed(2);
        pos2 = pos1 + 7;
      }
    } else {
      //inelastic
      title.innerHTML = "Inelastic";
      if (pos1 > pos2 - 5) {
        pos2 = pos1 + 5;
        var vf =
          (m1.value * a1.placeholder) / (m1.value + m2.value);
        vf = vf.toFixed(5);
        a1.placeholder = vf;
        a2.placeholder = vf;
      }
      collision = true;
    }
    updatepos2();
    await sleep(50);
  }
  reset();
}

function validpos() {
  var flag = false;
  if (pos1 >= 3 && pos1 <= 87 && pos2 >= 3 && pos2 <= 87 && fin == false && brk ==false) {
    flag = true;
  }
  return flag;
}

async function reset() {
  brk = false;
  pos1 = 12;
  cart1.style.left = "12vw";
  cart1postxt.placeholder = pos1;
  track.style.background = "darkslategray";
  pos2 = 45;
  cart2.style.left = "45vw";
  cart2postxt.placeholder = pos2;
  a1.placeholder = a0.value;
  a2.placeholder = 0;
  title.innerHTML = "Collision";
  fin = true;
  collision = false;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function eSwitch() {
  elastic = !elastic;
  if (elastic){
    eCon.classList.remove("col");
    eCon.classList.add("col-sm-3");
    v2Con.classList.add("col");
    v2Con.innerHTML = "<div class='input-group input-group-sm mb-3'><div class='input-group-prepend'><span class='input-group-text'>v<sub>2_f</sub> =</span></div><div class='input-group-append'><span class='input-group-text'>(2 * m<sub>1</sub>) / (m<sub>1</sub> + m<sub>2</sub>) * v<sub>1_i</sub></span></div></div>";
    v1eq.innerHTML = "((m<sub>1</sub> - m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)) * v<sub>1_i</sub>";
    v1txt.innerHTML = "v<sub>1_f</sub>";
  } else {
    v2Con.classList.remove("col");
    eCon.classList.remove("col-sm-3");
    eCon.classList.add("col");
    v2Con.classList.remove("col");
    v2Con.innerHTML = "";
    v1eq.innerHTML = "(m<sub>1</sub> * v<sub>1_i</sub>) / (m<sub>1</sub> + m<sub>2</sub>)";
    v1txt.innerHTML = "V<sub>f</sub> =";
  }
}