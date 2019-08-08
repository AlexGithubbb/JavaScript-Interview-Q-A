console.log(900 === 300 * 3); // true
console.log(900.0 === 300.0 * 3); // true
console.log(900.9 === 300.3 * 3); // false
console.log(300.3 * 3); // 900.9000000000001 !== 900.9

// because the decimal value is just a round value

// ways to solve this issue

// way 1: toFixed(num)


console.log(900.9 === Number((300.3 * 3).toFixed(2))); // true

// toFixed turns number to a string, so we also need to use Number()

// way2: toPrecision()

console.log(900.9 === Number((300.3 * 3).toPrecision(10))); // true

// way 3: 
console.log(900.9 === (((300.3 * 10) * 3)) / 10); // true
// time 10 to get an integar and divided by 10 to get 900.9


console.log(0.1 + 0.2);

console.log(0.1 + 0.2 === 0.3 );// false

console.log((0.1 + 0.2).toPrecision(3) === (0.3).toFixed(3));// true

