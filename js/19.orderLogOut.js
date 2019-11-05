function logOut() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000); // takes 1s
  setTimeout(() => {
    console.log(3);
  }, 0); // takes 0s
  console.log(4);
  new Promise((resolve, reject) => {
    // if (true) {
    //   resolve();
    // } else {
    //   reject();
    // }
  }).then(console.log('5'));
}

logOut(); // 1, 4, 3, 2

// settimeout is included event loop behind the hood(asynchronously). so it takes more time than just log it out(synchrounously).

// promise has priority to setTimeout
