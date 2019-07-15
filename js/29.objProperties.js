const a = {};
const b = {name: 'b'};
const c = {name: 'c'};
// const a = {
//    b : { name: 'b' },
//    c : { name: 'c' }
// };

a[b] = 200;
//a['[object Object]] = 200
a[c] = 400;
//a['[object Object]] = 400

console.log(a); // {[object Object]: 400}
console.log(b); // {name: 'b'}
console.log(c); // {name: 'c'}
console.log(a[b]); // 400

// recap: only strings can be object property, in this case, when we put b and c objects into a object. they became string '[object Object]' instead of objec. so result is overwrite with 400.