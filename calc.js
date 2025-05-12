let dis = document.getElementById("d");
let input = "";

function addno(num) {
  input += num;
  dis.innerHTML = input;
}

function addop(op) {
  input += op;
  dis.innerHTML = input;
}
function output() {
  if (input != "") {
    let res = eval(input);
    dis.innerHTML = res;
    input = res.toString();
  }
}

function clr() {
  input = "";
  dis.innerHTML = "0";
}

