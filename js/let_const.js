// let has block scope, it will die till the end of the block definded.

// var has function scope, it will die till the end of the function definded.

// var get hoisted at the top of funciton but let doesn't not.

// let x = function(){
//   if(true){
//     console.log(v); // undefined
//     // console.log(l); // ReferenceError: Cannot access 'l' before initialization
//     var v = 1;
//     let l = 2;
//   }
//   // console.log(v); // 1
//   // console.log(l); // ReferenceError: l is not defined
// }

// x();

// var
// is globally scoped and function scoped
// can be updated and re-decalred
// hoisted to the top and be hoisted and inistialized as undefined

var a;

(function() {
  console.log(a);
  a = 'apple';
  console.log(a);
})();

console.log(a);

// let
// is block scope
// can be updated but no re-decalred
// hoisted to the top with no initialized value. So if you try to use a let variable before declaration, you'll get a Reference Error.

let b;

// cause the initialization error
// (function () {
//   console.log(b);
//   let b = 'apple';
// })();

// fine
(function() {
  console.log(b);
  b = 'Banana';
})();

console.log(b);

// const

// is block scope
// can not be updated and re-decalred
// hoisted to the top with no initialized value. So if you try to use a const variable before declaration, you'll get a Reference Error.

// can't do
// const c = 'Pear1';
// (function() {
//   console.log(c);
//   c = 'Pear2'; //
// })();

// console.log(c);
