// way1: liteal syntax
const obj1 = {
  name : 'Alex',
  gener: 'male',
  location: 'Canada',
  age: function (){
    return new Date().getFullYear() - 1993;
  }
}

// console.log(obj1.age());

// wya2: new keyword
const obj2 = new Object();
obj2.level = 'senior';
obj2.gender = 'female';
obj2.phone = '123-123-12333';
obj2.call = function (){
  console.log( `call this number ${this.phone}`)
}

// console.log(obj2.call());

// way3: constructor / constructor function

function Obj3 (color, brand, year){
    this.color = color;
    this.brand = brand;
    this.year = year;
}

// class Obj3 {
//   constructor(color, brand, year){
//     this.color = color;
//     this.brand = brand;
//     this.year = year;
//   }
// }

const obj3 = new Obj3('red', 'honda', 2010);

Obj3.prototype.getDescrip = function (){
  console.log(`I bought a ${this.color} ${this.brand} in ${this.year} `);
}

obj3.getDescrip();
