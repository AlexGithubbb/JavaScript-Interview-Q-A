const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
// const a = {
//    b : { name: 'b' },
//    c : { name: 'c' }
// };

a[b] = 200;
//a['[object Object]'] = 200
a[c] = 400;
//a['[object Object]'] = 400

a['b'] = 200;
a['c'] = 400;
// {b: 200, c: 400}

console.log(a);
console.log(b);
console.log(c);
console.log(a[b]);

// recap: only strings can be object property, in this case, when we put b and c objects into a object. they became string '[object Object]' instead of object. so result is overwrite by 400.
// so make sure we wrap object b and c with "", so that we can ass value to a{}
