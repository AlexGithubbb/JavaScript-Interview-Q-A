// check this out too!
//https://www.freecodecamp.org/news/learn-javascript-closures-in-n-minutes/

// Closure is an inner function that has access to the scope of an enclosing function, (nothing but function with preserved data)

// variable in its own scope
// variable in the scope of outter function
// variable in global scope
// its own parameters
// paramters of outer function;

////////////////////// Example ONE ///////////////////////////////

// let obj = function (){
//   let i = 4;

//   return{
//     setI(k){
//       i = k;
//     },
//     getI(){
//       return i;
//     }
//   }
// }
// let x = obj();
// // let result = x.getI();
// // console.log(result); //4

// x.setI(2);
// let result = x.getI();
// console.log(result); // 2

////////////////////// Example TWO ///////////////////////////////

// var passed = 3;

// var addTo = function(){ // this is a closure function, it uses the variable from outside
//   let inner = 2;
//   passed = 4;
//   return inner + passed;
// }

// console.log(addTo()); // 6
// console.dir(addTo); // function addTo()

// var passed = 5;
// console.log(addTo()); // 6
// // console.dir(addTo);

////////////////////// Example THREE ///////////////////////////////

// CLOSURE WAY
var addTo = function(passed) {
  function add(inner) {
    return inner + passed;
  }
  return add;
};
var sum = new addTo(3);
console.log(sum(2)); //5

// // CLASS WAY
// class AddTo{
//   constructor(passed){
//     this.passed = passed;
//   }
//     add(inner){
//       return inner + this.passed;
//     }
//     static substract(inner){
//       return inner - this.passed;
//     }
// }

// var addThree = new AddTo(3);
// var result = addThree.add(2); // 5
// console.log(result);

// Mazdy Soraya
// 6 months ago(edited)
// It is much simpler, and very easy to understand.I've realized that people are confused about closures because they want to understand HOW CLOSURES WORK by applying NORMAL function BEHAVIOR MODEL (Many tutorials does not help with their explanations and examples, so its not that you are not smart ). But closures does not work like normal functions. Why not learn how do they work instead?

//We've all learned NORMAL function behavior, that is when you executing normal function, all variables inside are first initialized, used, then when function has finished its execution VARIABLES are DESTROYED.So that is normal function behavior.Simple, right ? We all know that,
//

// but - Closures does not work like that.So what is closure then ?
//When you have function inside a function it is AUTOMATICALLY a CLOSURE.What is the property of the closures ? There is only one that you need to take home and understand! Again, in NORMAL FUNCTION BEHAVIOR: After function has finished its execution, variables are destroyed.

//Instead, When you have FUNCTION inside a FUNCTION, we now know it is automatically a CLOSURE.CLOSURE has this PROPERTY: When Your engine sees function inside a function, it WILL NOT DESTROY data, data will remain in memory.Imagine like your engine thinks oh wait, i have function inside a function, so this nice dude wants me NOT TO DESTROY variables.

//So we can access them even after function has finished execution.What is use of that property ? Consider following  EXAMPLE: imagine you have function inside function (closure).You have OUTER FUNCTION with COUNTER set to 0. Then in inner function, because we can access outer function variables we want to do the following: Clicking on a button we will increment counter.What would happen without closure properties, i.e.if they would behave like normal function?Without closure behavior, when we click on a button, it will increment counter to 1 and it will remain 1 no matter how many times we click button.Why ? Because, counter value is lost, it is lost because this will be WORKFLOW: 1. OUTER FUNCTION sets counter to 0. 2. Inner function increments counter so now counter is 1. 3. We come to the end of the outer function, so basically we finished with executing a function, so in that regard variables are destroyed in our case counter = 1 is destroyed.Then we click again, it will repeat process, so set to 0, then inner increments to 1, again we come to the end of the function, puf counter is again destroyed from memory.so that is why we always see 1. Then remember, this would be normal behavior without closures.

//But when engine see function inside function it is automatically a closure, and again to carve in your brains, variables would not be destroyed after function has finished its execution.So counter set to 1 will not be destroyed it will be stored in memory even after outer function has finished its execution.SO REAL WORKFLOW with CLOSURES is this: 1. OUTER FUNCTION sets variable counter to "0". 2. Inner function access that variable and increments it so in memory is COUNTER = 1. 3. Function has finished its execution, BUT being a closure variable is still in memory so not destroyed.Now we  have in memory COUNTER = 1, now upon clicking the button second time, button engine will know it is closure and will use existing variable in memory(counter = 1), so next time will increment to COUNTER = 2, 3, ..

//NOTE ALSO, all callback functions are automatically closures as well!
