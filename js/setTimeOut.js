setTimeout(() => {
  console.log('a');
}, 0);
console.log('b');
console.log('c');

// even the time is 0s, it is still treated as an asyncchoronons way, you can't execute it right away.