// LET & CONST

// console.log(name); // Error:  Cannot access 'name' before initialization
let name;
// console.log(name);// undefined

name = 'Alex'; // define name here
console.log(name); // Alex


// function hoisting

// function expression

console.log(getSum(2, 3)); // Error:  Cannot access 'getSum' before initialization

 let getSum = function (a, b) {
  return a + b;
}

console.log(getSum(2, 3)); // 5


// function declaration call be called anywhere
// function getSum(a , b){
//   return a + b;
// }
