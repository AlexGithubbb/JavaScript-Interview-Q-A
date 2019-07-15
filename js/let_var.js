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


var
// is globally scoped and function scoped
// can be updated and re-decalred
// hoisted to the top and be hoisted and inistialized as undefined


let
// is block scope
// can be updated but no re-decalred
// hoisted to the top with no initialized value. So if you try to use a let variable before declaration, you'll get a Reference Error.


Const

// is block scope
// can not be updated and re-decalred
// hoisted to the top with no initialized value. So if you try to use a const variable before declaration, you'll get a Reference Error.