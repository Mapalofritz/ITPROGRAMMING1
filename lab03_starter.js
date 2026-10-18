// enrollment.js

var x = 450;
var y = 3;
var VAT = 0.12;
var MISCFEE = 1200;

var n = 'Juan Dela Cruz';
var N = 'BSIT';
var lvl = 2;
var flag = true;

var a = x * y;
var a = a + MISCFEE;

// add vat
var t = a + a * VAT;

// var oldRate = 0.10;
// var oldMisc = 1000;

var c = 0;
c = c + 1;

if (flag == true) {
  var s = 'ENROLLED';
} else {
  var s = 'NOT ENROLLED';
}

console.log(n, N, lvl, s);
console.log(a);
console.log(t);
console.log(c);
