// // test for FreeCode Camp Algorithms and Data Structure section

// // repeat string (can not use in-built repeat()method)
// let str = 'abc';
// let num = 3;
// let newStr = "";
// // newStr = str.repeat(num);

// // way1 (concat)
// // for (let i = 0; i < num; i++) {
// //   newStr = newStr.concat(str);
// // }

// // way2 (+=)
// // newStr = str.split('');
// for(let i =0; i < num; i ++){
//   newStr += str;
// }

// console.log(newStr);

// //for the issues about arrays, most of the problems would be sth about array.split("") / do something... / .join("");

// // Check if a value is classified as a boolean primitive. Return true or false.
// // Boolean primitives are true and false.

// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return (typeof bool === "boolean");
// }

// booWho(null);

// 1:
// let a = {
//   b:{
//     c:4
//   }
// }

// // oject is reference data, so it's total the same
// let d = a;

// a.b.c = 5;
// console.log(a.b.c);
// console.log(d.b.c);

// 2: debouncing
const input = document.querySelector('input');

// const debounce = (func, timer) => {
//   let timeId = null;
//   return (...args) => {
//     if (timeId) {
//       clearTimeout(timeId);
//     }
//     timeId = setTimeout(() => {
//       func(...args);
//     }, timer);
//   };
// };

const debounce = (func, timer) => {
  let timeId = null;
  return (...args) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      func(...args);
    }, timer);
  };
};

input.addEventListener(
  'keyup',
  debounce(e => {
    console.log(input.value);
  }, 1000)
);

//3

let a = {
  length: 5,
  b: function() {
    console.log(this.length);
    // return this.length;
  }
};

// let r = a.b;
// console.log(r); // just the function
// console.log(r()); // undefined

let r = a.b();
console.log(r); // undefined because the func doesn't return anything, just console.log(), so r is undefined

let b = a.b();
// b(); error: b is not a function

// an interview quiz

let hare = 5;
let tortoise = 11;
let j = 0;

for (j = 0; j < 20; j++) {
  if (hare < tortoise) hare *= 2;
  else if (hare == tortoise) break;
  else tortoise += 1;
}

console.log(hare + tortoise); // 40

// Nice to share some of my thoughts here, firstly, this is the funniest application process I have ever seen.Little quiz can easily trigger your passion and interest.

// I am a self - taught front end web developer, I like JavaScript, the OOP with prototype and classes form ES6 features, all the potentials that it gives us, then I started to learn React and Redux, how can I say, just bring the fun of web development into a new level, components rendering each part of the project and do its own job, them we combine them to build up a beautiful app and what's more, it's reusable, how cool is that!

// I graduated with MS.Electrical and Computer Engineering and most of my courses are about electronics, it's pretty tough at the beginning but I still graduated in the end. I conquer the fear, overcome the tough thing even I am not even interested in.

// But for web development, it's where my passion is. I started the journey 1 year ago and I just enjoy it so much... In my opinion, working with your hobbies is just so lucky and happy.

// Thanks for your time to read this long message, not supposed to be like this.

// Have a great day and looking forward to see you soon!
