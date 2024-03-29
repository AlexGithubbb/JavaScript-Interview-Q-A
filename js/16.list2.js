// //////////////////////////  CHALLENGE ONE  /////////////////////////////
// // think about what list2 log out and why

// let list1 = [1, 2, 3];
// let list2 = list1;
// list1 = [3, 2, 1]; // list1 updated but list2 still refer to the previous underlying array coz u have list2 = lit1' before this.
// // unless you run list2 = list1 again after the list1 got updated, then list2 now will refer to the newer underlying array.just like:
// console.log('list2: ', list2);
// console.log('list1: ', list1);

// list2 = list1;

// list1.push(4, 5, 6);
// console.log('list1:', list1);
// console.log('list2:', list2);

// // things like Num , Str are all primitive type of data, they are set to value instead of reference;

// // Well, the Array and Object in JS are both reference type,
// // so lis1 and list2 arrays are always set (refer) to a same underlying array. Thus, as soon as list1 got renewed, the list2 is updated as well.

// ///////////////////////////// CHALLENGE TWO ////////////////////////////
// // copy list1 but not the reference
// forEach / slice() / concat() / Array.from() / [...]

// // method 1: forEach loop..
const list3 = [1, 2, 3];
const list4 = [];
list3.forEach(item => {
  list4.push(item);
});

list3.push(4, 5, 6);
/*
console.log('method1: forEach');
console.log('list3:', list3);
console.log('list4:', list4);
*/

// method 2 : slice()
const list5 = [1, 2, 3];
const list6 = list5.slice();
list5.unshift(0);

/*
console.log('method2: array.slice()');
console.log(list5);
console.log(list6);
*/
/* same to string 
let str = 'lalala';
newStr = str.slice();
str = 'no lalala'
console.log(newStr);
 */

// // method 3: concat()
// const list7 = [1, 2, 3];
// const list8 = list7.concat([]);
// list7.push(4, 5, 6);
// console.log('method3: array.concat([])');

// console.log('list7:', list7);
// console.log('list8:', list8);

// // method 4: Array.from()
/**
 listold = ['apple', 123, true];
 listnew = Array.from(listold);
 
 listold.push(undefined);
 */

// console.log('method4 : Array.from(oldArray)');
// console.log(listold);
// console.log(listnew);

// // method 5: Object.assign([], ...)
// // list2 = Object.assign([], list1)

// // method 6: [...]
// // const list2 =[...list1]

// list1 = [1,2,3,4,5,6]
// list2 = [...list1];
// list1 = [40, 50, 60];
// console.log(list1);
// console.log(list2);
