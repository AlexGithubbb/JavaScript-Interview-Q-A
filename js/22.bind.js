this.distance = '10000';

const test1 = {
  distance: '3000',
  getdistance: function() {
    return this.distance;
  }
};
// we run getdistance function and assign the value to variable result01 === 3000
const result01 = test1.getdistance();
console.log(result01); // 3000

// result02 is a global funciton, when run it, 'this' from getdistance will also point to global
const result02 = test1.getdistance;
console.log(result02()); // 10000

// we use bind to fix this issue
const result03 = test1.getdistance.bind(test1);
console.log(result03()); //3000

// we can also use 'bind' attached to getdistance func
const test2 = {
  distance: '3000',
  getdistance: function() {
    return this.distance;
  }.bind()
};

console.log(test2.getdistance()); // 10000

// const test3 = {
//   distance: '3000',
//   getdistance: function () {
//     return this.distance;
//   }
// }
// const result1 = test3.getdistance; // result1 func is as same as getdistance function. so 'this' refers to a global object

// console.log(result1()); // 10000

const test4 = {
  distance: '3000',
  getdistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};

const test5 = {
  distance: '500'
};
const result2 = test4.getdistance.bind(test4, 'km'); // use bind to reset 'this' refer to test4
const result3 = test4.getdistance.bind(test5, 'm'); // use bind to reset 'this' refer to test5

console.log(result2(' from Boston')); // 3000 km far from here
console.log(result3(' from my house')); // inner two

const test6 = {
  distance: '3000',
  test: () => {
    getdistance: (unit, caption) => {
      console.log(`${this} in arrow function is window object`);
      return this.distance + unit + caption;
    };
  }
};

const test = test6.test();
console.log(test);

// const result4 = test6.getdistance.bind(test6, 'km');
// console.log("bind here doesn't work");
// console.log(result4(' from Boston'));
