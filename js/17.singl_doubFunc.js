function getTotal() {
  // const newArr = Array.prototype.slice.call(arguments);
  const newArr = Array.from(arguments);
  if (newArr.length >= 2) {
    let total = 0;
    newArr.forEach(item => {
      total += item;
    });
    return total;
  } else {
    return num2 => {
      return newArr[0] + num2;
    };
  }
}

// function getTotal() {
//   // const newArr = Array.prototype.slice.call(arguments);
//   const newArr = Array.from(arguments);
//   const cod1 = () => {
//     let total = 0;
//     newArr.forEach(item => {
//       total += item;
//     })
//     return total;
//   }
//   const cod2 = () => {
//      return (num2 => {newArr[0] + num2})
//   }
//   (newArr.length >= 2) ? cod1() : cod2()
//   }

// singly
let result1 = getTotal(10, 20);
console.log(result1);
// doubly
let result2 = getTotal(10)(20);
console.log(result2);
