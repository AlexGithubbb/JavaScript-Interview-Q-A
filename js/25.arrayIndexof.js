

const myArr = [5];
const anotherArr = myArr;

const myObj = {name: "Bob"};
const anotehrObj = myObj;

console.log([10, 20, 30, 40, 50].indexOf(30)); // 2

console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); //  -1
console.log([{ name: 'Pam' }, { name: 'Kent' }, anotehrObj].indexOf(anotehrObj)); //  2

console.log('hello world'.indexOf('o')); // 4

console.log([[1], [2], [3], [4]].indexOf([2])); // -1
console.log([[1], [2], [3], [4], myArr].indexOf(myArr)); // 4
console.log([[1], [2], [3], [4], myArr].indexOf(anotherArr)); // 4

// it shows that two different objects(also arrays) r never equal, but when two different variables both refer to the same underlying object, then they're equal.
