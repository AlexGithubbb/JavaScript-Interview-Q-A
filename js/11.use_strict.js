// // Enforce strict parsing and error handling in our code

'use strict'

function callItem(a ,a ,b){
  console.log(a, a, b);
}

// callItem(1, 2, 3); // Duplicate parameter name not allowed in this context




// let myCar = 'toyota'; // Error： myCar is not defined

// (function car() {
//   myCar = "fox"
//   function showCar(){
//     console.log(myCar);
//   }
//   showCar()
// })();

// console.log(myCar);


// // avoid us to delete that sth is not deletable

// delete Object.prototype; // Error: cannot delete property 'prototype' of function Object();


// // 'use strict' fails fast and fail loudly

//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
var prop = "likes";
if(contacts[0].prop ){
  console.log('true');
}else{
  console.log('false');
}
console.log(contacts[0].firstName);

function lookUpProfile(name, prop) {

  for (var i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName ) {
      if (contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

let res= lookUpProfile('Harry','likes');
console.log(res);





