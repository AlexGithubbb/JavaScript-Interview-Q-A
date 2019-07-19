let posts = [
  {title: "post one", text: 'this is No.1'},
  {title: "post two", text: 'this is No.2'},
]

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

// add a callback function after the third post created, this is where we use callback function 
function createPost(post, callback){
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}


createPost({title: "post three", text: "this is No.3"}, getPosts);