let posts = [
  { title: 'post one', text: 'this is No.1' },
  { title: 'post two', text: 'this is No.2' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// add a callback function after the third post created, this is where we use callback function
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;

      if (!err) {
        resolve();
      } else {
        reject('Error: sth went wrong');
      }
    }, 2000);
  });
}

// async function init(){
//   await createPost({ title: "post three", text: "this is No.3" });
//   getPosts();
// }

// init()

// Async await with fetch

async function init() {
  // const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  // console.log(data);
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

init();
