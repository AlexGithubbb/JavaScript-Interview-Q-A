// String
const string1 = 'text1';
const string2 = string1;
console.log(string2);// text1
console.log(string1);// text1



// Object
const obj1 = {
  name : "Alex",
  age: 26
}

const obj2 = obj1;

obj2.name = 'Bob';

console.log(obj1); //  {name: "Bob", age: 26}


const arr1 = ['Apple', 'Banana', 'Orange'];
const arr2 = arr1;
arr2.unshift('Kiwi'); // add to the top
arr2.shift(); // remove from the top
arr1.pop() // remove from the end
arr1.push('Kiwi') // add to the beginning
console.log(arr1);
