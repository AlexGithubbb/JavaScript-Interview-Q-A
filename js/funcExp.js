funcDec(); // can call it before its defined
funcExp(); //ReferenceError: Cannot access 'funcExp' before initialization
function funcDec(){
  console.log('function decleration');
}

let funcExp = function () {
  console.log('function expression');
}

// funcExp(); //TypeError: is not a function
// var funcExp = function () {
//   console.log('function expression');
// }



// for function expression, u assign it to a value, it means it has the attribute of value, which is, you can not use it before it's defined.

// console.log(age); // TypeError: it's undefined
// var age = 23;


// console.log(name); // ReferenceError: can not access 'name' before initialization
// let name = 'Alex';


// *************** TypeError & ReferenceError ***************

// A ReferenceError occurs when you try to use a variable that doesn't exist at all.

// A TypeError occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains. In the case where the detailed message says "is not defined", this can occur if you have a variable whose value is the special undefined value, and you try to access a property of it.

