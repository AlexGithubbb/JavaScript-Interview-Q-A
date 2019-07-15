// VAR

// variable hoisiting
// var name; // name got hoisted here, but not defined
// console.log(name); // undefined

// name = 'Alex'; // define name here
// console.log(name); // Alex

// function hoisting

// FUNCTION EXPRESSION
var getSum; // line 1, getSum is hoisted here, but not a function;

// console.log(getSum(2,3)); // Error:  getSum is not a function

// only getSum variable is hoisted on the top of global, not the function, like line 1
// var getSum = function(a, b) {
//   return a + b;
// };

// console.log(getSum(2, 3)); // 5

// // FUNCTION DECLERATION
// // is different, the whole function can be hoisted from the top
// console.log(getMultiple(4, 5)); // 20

function getMultiple(a, b) {
  return a * b;
}

// another example
var globalVar = 'global';

(function() {
  console.log(name); // undefined
  var name = 'Jen';

  // console.log(getAge()); // getAge is not a function
  var getAge = function() {
    return '30';
  };

  console.log(getState()); // Delaware
  function getState() {
    globalVar = 'lol'
    // return 'Delaware';
    return globalVar;
  }
})();

console.log(globalVar);
