let posts = [
  {title: "post one", text: 'this is No.1'},
  {title: "post two", text: 'this is No.2'},
]

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title} ${post.text}</li>`;
    })
    document.body.innerHTML = output;
    console.log('step 2');
    
  }, 1000);
}

// getPosts()

// add a callback function after the third post created, this is where we use callback function
function createPost(post, callback){
  setTimeout(() => {
    posts.push(post);
    // callback func
    console.log("step 1");
    callback();
  }, 2000);
}


createPost({title: "post three", text: "this is No.3"}, getPosts);