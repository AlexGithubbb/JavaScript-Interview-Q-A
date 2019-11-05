// String
const string1 = 'text1';
const string2 = string1;
console.log(string2); //
console.log(string1); //

// Object
const obj1 = {
  name: 'Alex',
  age: 26
};

const obj2 = obj1;

obj2.name = 'Bob';

console.log(obj1); //

const arr1 = ['Apple', 'Banana', 'Orange'];
const arr2 = arr1;
arr2.unshift('Kiwi'); //
console.log(arr1);

arr2.shift(); //

arr1.pop(); //
console.log(arr2);

arr1.push('Kiwi'); //
console.log(arr1);
console.log(arr2);
