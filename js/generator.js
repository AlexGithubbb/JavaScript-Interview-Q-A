function *generator(){
  console.log("Hello");
  yield 'Yield round 1..';
  console.log("Continue");
  yield 'Yield round 2..';
  return 'Finished';
}

var g = generator();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

for(let value of g){
  console.log(value);
}


