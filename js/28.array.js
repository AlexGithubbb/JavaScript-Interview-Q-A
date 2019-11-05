// const data1 = 'Jordan Smith';

// // const data2 = [].filter.call(data1, function (elem, index) {
// //   return index > 6;
// // });

// // [].filter() => Array.prototype.filter(...), let us can use filter method

// // const data2=  [].filter.call(data1, (el,index) => index < 6 && el.includes('S'));
// const data2 = [].filter.call(data1, (el, index) => index < 6);

// console.log(data2); //

// // only use 'read-only' methods on str, like: forEach, filter, map, some, every, etc.
// // can not use: pop, push, shift, splice, reverse, etc..

// // array example
// const arr1 = ['Apple', 'Red', 123, false];
// arr1.reverse(); //
// const arr2 = arr1.splice(0, 2); // remove first two from arr1 to arr2

// console.log(arr1); // red apple
// console.log(arr2); //  false 123

// // str example : slice doesn't modify the original array
// const str = 'hello world';
// const strArr = str.slice(0, 5); // remove 0-5 off and store to strArr
// console.log(strArr); // hello
// console.log(str); // world

// SLICE && SPLICE

// slice() --- (start position, end by)
// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.slice(0, 3); // first three
// const arr2 = arr.slice(4, 5); // only last one
// const arr3 = arr.slice(0); // copy
// console.log(arr);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// splice() --- first argument: start position, sendond : number of elements

const Arr = [1, 2, 3, 4, 5];
const Arr1 = Arr.splice(0, 3); // first three
// const Arr2 = Arr.splice(4, 1); // only last one
// const Arr3 = Arr.splice(0); // all cut off

// console.log(Arr);

// remove
console.log('Arr1', Arr1);
// console.log('Arr2', Arr2);
// console.log('Arr3', Arr3);

// insert at index = 5
// const Arr4 = Arr.splice(5, 0, 6);

console.log('Arr: ', Arr);
