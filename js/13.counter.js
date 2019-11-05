// // counting how many times the function has been called;
function myFunc(){
  let count = 0;
  // console.log(count);
  return function() {
    //a closure preserve the data (count)
    count++;
    return count;
  };
}

// console.log(myFunc()()); // return 1
// console.log(myFunc()()); // return 1
// console.log(myFunc()()); // return 1

const instanceOne = myFunc();
const instanceTwo = myFunc();
console.log('instanceOne: '+ instanceOne());
console.log('instanceOne: '+ instanceOne());
// console.log('instanceTwo: '+ instanceTwo());
// console.log('instanceTwo: '+ instanceTwo());
// console.log('instanceOne: '+ instanceOne());

// function myFunc() {
//   let count = 0;
//   return function () { //a closure preserve the data (count)
//     count ++;
//     if(count <= 5){
//       return count;
//     }else{
//       throw Error('sth went wrong')
//     }
//   }
// };

// const instanceOne = myFunc();
// const instanceTwo = myFunc();
// console.log('instanceOne: '+ instanceOne());  //1
// console.log('instanceOne: '+ instanceOne()); //2
// console.log('instanceOne: '+ instanceOne()); //3
// console.log('instanceTwo: '+ instanceTwo()); //1
// console.log('instanceTwo: '+ instanceTwo()); //2
// console.log('instanceOne: ' + instanceOne()); //4
// console.log('instanceOne: ' + instanceOne()); // 5
// console.log('instanceOne: ' + instanceOne()); // (6 <=5 ) is false -> error occurs


// function count(){
//   let count = 0;
//   return function (){
//     count ++;
//     return count;
//   }
// }

// console.log(count()());
// console.log(count()());
// console.log(count()());