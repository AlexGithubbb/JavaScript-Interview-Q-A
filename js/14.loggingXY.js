(function (){
  var x = y = 200;
})();

console.log('y: ', y); // 200 but will call an error if its under strict mode
console.log('x: ', x); // error: is not defined

// the deep explore way:
// var y;
// (function func(){
//   y = 200;
//   var x = y;
// })()

// console.log(y);
// console.log(x);



