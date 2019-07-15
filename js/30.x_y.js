// case1:
let x = 10;

// //Comment out the reassignment "x=100" in the function, you'll see the type of x  is a function. So basically there is a new function scope variable x was declared. x=100 overwrites the functional scope variable, but not the global variable.

// function y() {
//   console.log(typeof x); // function
//   x = 100;
//   console.log(typeof x); // number
//   return;
//   function x() {} // be hoisted to the top, so x now is in a function scope, it doesn't affect the global x
// }

// same thing as
function y() {
  function x() {} // be hoisted to the top, so x now is in a function scope, it doesn't affect the global x
  console.log(typeof x); // function
  x = 100;
  console.log(typeof x); // number, in x function scope
  return;
}

y();
console.log(x); // 10

// case2:

// function y(){
//   x = 100;
//   return;
//   function z () {} // z function scope but not x, so x will still be overwrited as 100
// }

// y();

// console.log(x); // 100
