const user1 = {
  name: 'Bob',
  age: 28,
  hobbies : ['basketball', 'boardgame', 'bikiing']
}
const user2 = {
  name: 'Bob',
  age: 28,
  hobbies : ['basketball', 'boardgame', 'bikiing']
}


console.log(user1 == user2); // false
console.log(user1 === user2); // false
// two objects are never equal to each other becasue they always refer to different underlying object , though the values are same

// but if we do
const user3 = user1;
console.log(user1 == user3); // true
console.log(user1 === user3); // true
// now both objects are refering the same object, so they are equal

// but what if we wanna compare the values instead of the reference?

//  solution 1: JSON.stringify()

console.log(JSON.stringify(user1) == JSON.stringify(user3)); // true
console.log(JSON.stringify(user1) === JSON.stringify(user3)); // true


// same to two arrays comparison. coz array is object in JS
console.log([] == []); // flase
console.log(JSON.stringify([]) === JSON.stringify([])); // true
