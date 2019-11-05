const myArr = [5];
const anotherArr = myArr;

const myObj = { name: 'Bob' };
const anotherObj = myObj;

console.log([10, 20, 30, 40, 50].indexOf(30)); //

console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); //
console.log(
  [{ name: 'Pam' }, { name: 'Kent' }, anotherObj].indexOf(anotherObj)
); //

console.log('hello world'.indexOf('o')); //

console.log([[1], [2], [3], [4]].indexOf([2])); //
console.log([[1], [2], [3], [4], myArr].indexOf(myArr)); //
console.log([[1], [2], [3], [4], myArr].indexOf(anotherArr)); //

// it shows that two different objects(also arrays) r never equal even with the same value, but if two different variables both refer to the same underlying object, then they're equal.
