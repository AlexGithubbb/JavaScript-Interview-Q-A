// way 1
// function count() {
//   let cnt = 0;
//   return function() {
//     cnt++;
//     console.log(cnt);
//   };
// }

// const btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', count());

// way 2
const count = {
  cnt: 0,
  inc() {
    this.cnt++;
    console.log(this.cnt);
  }
};

const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', count.inc.bind(count));

// way 3
// const count = {
//   cnt: 0,
//   inc() {
//     count.cnt++;
//     console.log(count.cnt);
//   }
// };

// const btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', count.inc);

// // way 4
// const count = {
//   cnt: 0,
//   inc() {
//     this.cnt++;
//     console.log(this.cnt);
//   }
// };

// const btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', () => count.inc());
