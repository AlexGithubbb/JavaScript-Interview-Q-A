// create a private variable
function func(){
  var priv = 'secret password';
}

console.log(func()); // undefined

// to get this private var, we need a helper func
function func() {
  var priv = 'secret password';
  return function (){
    return priv
  }
}

const getPriv = func();
console.log(getPriv());


