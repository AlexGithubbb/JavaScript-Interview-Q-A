// var arr1 = []; // length = 0
// var arr2 = new Array(3); // empty x 3, length = 3
// var arr3 = new Array(1, 2, 'three', 4, 'five'); // length = 5
// var arr4 = new Array([1, 2, 3, 4, 5]); // length = 1

// const animals = {
//   rabbit: 2,
//   tiger: 4,
//   bear: 1
// };

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);
// console.log('arr3: ', arr3);
// console.log('arr4: ', arr4);
// console.log('arr5: ', arr5);

// the only way to define a new empty array with a cartain length, use
// new Array ( num );

const obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log([...obj]);
console.log(Array.from(obj));
