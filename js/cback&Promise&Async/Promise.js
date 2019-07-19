let posts = [
  { title: "post one", text: 'this is No.1' },
  { title: "post two", text: 'this is No.2' },
]

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

// add a callback function after the third post created, this is where we use callback function 
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = true;

      if (!err) {
        resolve();
      } else {
        reject("Error: sth went wrong");
      }
    }, 2000);

  })
}




// createPost({ title: "post three", text: "this is No.3" }).then(getPosts).catch(err => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 20;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("goodbye");
  },1000);
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));



