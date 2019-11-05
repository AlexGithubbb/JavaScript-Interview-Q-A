console.log(900 === 300 * 3); //
console.log(900.0 === 300.0 * 3); //
console.log(900.9 === 300.3 * 3); //
console.log(300.3 * 3); // 900.9000000000001 !== 900.9

// because the decimal value is just a round value

// ways to solve this issue

// way 1: toFixed(num)

console.log(900.9 === Number((300.3 * 3).toFixed(1))); // >= 1, start from right to decimal point

// toFixed turns number to a string, so we also need to use Number()

// way2: toPrecision()

console.log(900.9 === Number((300.3 * 3).toPrecision(4))); // >=4 start from most left num

// way 3:
console.log(900.9 === (300.3 * 10 * 3) / 10); //
// time 10 to get an integar and divided by 10 to get 900.9

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 === 0.3); //

console.log((0.1 * 10 + 0.2 * 10) / 10 === (0.3 * 10) / 10); //

console.log((0.1 + 0.2).toPrecision(2) === (0.3).toFixed(2)); //
