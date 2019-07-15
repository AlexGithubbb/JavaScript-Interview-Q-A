async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2s passed');
      resolve('text is here');
    }, 2000);
  })
  console.log('start count...');
  let err = false;
  if(!err){
    const res = await promise;
    return res;
    // return response;
  }else{
    await Promise.reject('Some error occurs');
  }
}


myFunc().then(data => console.log(data))
.catch(err => console.log(err))

// let cleanRoom = function(){
//   return new Promise((resolve, reject) => {
//     resolve('I cleaned the room, ')
//   })
// } 
// let removeGarbage = function(message){
//   return new Promise((resolve, reject) => {
//     resolve(message + 'removed the garbage, ')
//   })
// } 
// let wonIceCream = function(message){
//   return new Promise((resolve, reject) => {
//     resolve(message + 'and won the ice cream! ' )
//   })
// } 

// cleanRoom().then((result) => {
//   return removeGarbage(result);})
//   .then( result => {
//     return wonIceCream(result)})
//     .then(result => {
//       console.log('All is finished, ' + result);
//     })


// Promise.all([cleanRoom, removeGarbage, wonIceCream]).then(
//   console.log('all finished'));

// Promise.race([cleanRoom, removeGarbage, wonIceCream]).then(
//   console.log('one of them finished'));

