// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

// const myJsonObj = {
//   'myString': 'string',
//   'myNumber': 123,
//   'myNull': 'null',
//   'myBoolean': 'fasle',
//   // 'myUndefined': [undefined],
//   'myArray': ['apple', 'orange', 'banana'],
//   'myFunction': [function(){
//     console.log('this is JSON function');
//   }],
//   'myObject': [jsonObject = {
//     name : "lili",
//     age : 23
//   }]
// };

const myJsonObj = {
  myString: 'some string',
  myNumber: 123,
  myNull: null,
  myBoolean: true,
  // myUndefined: undefined,
  myArray: [1, 2, 'banada'],
  // myFunction: function sum(a,b){
  //   return a + b
  // },
  myObject: {
    name: 'Alex',
    age: 26,
    career: 'web developer'
  }
};

console.log(JSON.stringify(myJsonObj));

// except for undefined and functions
