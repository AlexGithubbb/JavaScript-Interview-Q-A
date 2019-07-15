// change the single function with multiple arguments into a sequence functions that take one or part of the arguments


// function getProduce(num1, num2){
//   return num1 * num2;
// }

// currying version

// function getProduct(num1){
//   return function (num2){
//     return num1 * num2;
//   }
// }

// let result = getProduct(2)(3);
// console.log(result);


// function getTime(distance, speed){
//   return distance/speed;
// }

// console.log(getTime(400, 50));
// console.log(getTime(400, 60));
// console.log(getTime(400, 80));

// better way

function getTime(distance) {
  return function(speed){ // return function two
    return distance / speed;
  }
}

let distance400k = getTime(400);
let time = distance400k(50);
console.log(time);



