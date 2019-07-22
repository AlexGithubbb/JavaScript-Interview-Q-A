// test for FreeCode Camp Algorithms and Data Structure section

// repeat string (can not use in-built repeat()method)
let str = 'abc';
let num = 3;
let newStr = "";
// newStr = str.repeat(num);

// way1 (concat)
// for (let i = 0; i < num; i++) {
//   newStr = newStr.concat(str);
// }

// way2 (+=)
// newStr = str.split('');
for(let i =0; i < num; i ++){
  newStr += str;
}

console.log(newStr);

//for the issues about arrays, most of the problems would be sth about array.split("") / do something... / .join("");


// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (typeof bool === "boolean");
}

booWho(null);





