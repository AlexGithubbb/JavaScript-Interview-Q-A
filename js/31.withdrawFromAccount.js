// // use closure to preserve the value

// const account1 = {
//   name: 'Jen',
//   totalAmount: 5000,
//   deductAmount: function(amount) {
//     this.totalAmount -= amount;
//     return 'Amount in account: ' + this.totalAmount;
//   }
// };

// const account2 = {
//   name: 'James',
//   totalAmount: 8000
// };

// const withdrawFromAccount = function(amount) {
//   return account1.deductAmount.bind(account2, amount);
// };

// console.log(withdrawFromAccount(500)());
// console.log(account2.totalAmount); // 7500

// console.log(withdrawFromAccount(200)());

const user1 = {
  totalAmount: 1000,
  withdraw: function(amount) {
    this.totalAmount -= amount;
    return 'total amount :' + this.totalAmount;
  }
};

console.log(user1.withdraw(200)); // 800

const user2 = {
  totalAmount: 5000
};

function withdrawFromAccount(amount) {
  return user1.withdraw.bind(user2, amount);
}

console.log(withdrawFromAccount(1000)());
console.log(user2.totalAmount); // 4000

console.log(withdrawFromAccount(500)());
console.log(user2.totalAmount); // 3500
