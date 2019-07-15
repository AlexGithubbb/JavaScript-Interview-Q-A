(function IIFE(name){
  console.log('my name is ' + name);
})('Alex');



// The point of using IIFE

// Preserve a private scope within your function, it allows you to write any global variables without wrorrying if it's conflict with the gloabl variables from outside IIFE, e.g. the '$', if you use it in IIFE then you can also use it outside of the IIFE.
// you can do 
// functions function(){},
// operations if(){},
// also variables define


(function(){
  var $ = 'currency';
  function sumNum(a,b){
    return a + b;
  };
  if(true){
    console.log('it\'s true');
  }
})();