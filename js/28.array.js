const data1 = 'Jordan Smith';

// const data2 = [].filter.call(data1, function (elem, index) {
//   return index > 6;
// });

// [].filter() => Array.prototype.filter(...), let us can use filter method

// const data2=  [].filter.call(data1, (el,index) => index < 6 && el.includes('S'));
const data2=  [].filter.call(data1, (el,index) => index < 6 );


console.log(data2);

// only use 'read-only' methods on str, like: forEach, filter, map, some, every, etc.
// can not use: pop, push, shift, splice, reverse, etc..


// array example
const arr1 = ['Apple','Red',123,false];
arr1.reverse(); //
const arr2 = arr1.splice(0,2); // remove first two from arr1 to arr2

console.log(arr1);
console.log(arr2);

// str example
const str = 'hello world'
const strArr = str.slice(0,5); // remove 0-5 off and store to strArr
console.log(strArr);
console.log(str);
