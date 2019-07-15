
// issue. click the button and always log 6
// function button5(){
//   for(var i =1; i <=5; i++){
//     const body = document.querySelector('body');
//     // console.log(body);
//     const button = document.createElement('button');
//     button.innerHTML = 'Button ' + i;
//     button.addEventListener('click', ()=>{
//       console.log('This is button' + i);
//     })
//     body.appendChild(button);
//   }
// }

// solution 1: add an IIFE
// function button5(){
//   for(var i =1; i <=5; i++){
//     const body = document.querySelector('body');
//     // console.log(body);
//     const button = document.createElement('button');
//     button.innerHTML = 'Button ' + i;
//     (function(num){
//       button.addEventListener('click', () => {
//         console.log('This is button' + num);
//       })
//     })(i)
//     body.appendChild(button);
//   }
// }


// solution 2: change var to let in for loop
function button5(){
  for(let i =1; i <=5; i++){
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.innerHTML = 'Button ' + i;
    button.addEventListener('click', () => {
        console.log('This is button' + i);
      })
    body.appendChild(button);
  }
}

button5()