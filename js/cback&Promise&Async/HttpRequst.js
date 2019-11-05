// 1: fetch test.text
// const btn = document.querySelector('.click');
// btn.addEventListener('click', loadText);

// function loadText() {
//   var xhr = new XMLHttpRequest();

//   xhr.open('GET', '/js/cback&Promise&Async/test.txt', true);

//   xhr.onload = function() {
//     if (this.status == 200) {
//       console.log(this.responseText);
//     }
//   };
//   // sends request
//   xhr.send();
// }

// 2 :fetch local json users with AJAX
const showJsonBth = document.querySelector('.showList');
showJsonBth.addEventListener('click', loadJson);

function loadJson() {
  // CREATE XML object
  var xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', '/js/cback&Promise&Async/users.json', true);

  // LOAD
  xhr.onload = function() {
    if (this.status == 200) {
      // console.log(this.responseText);
      var users = JSON.parse(this.responseText);
      let output = '';

      // for in loop
      // for (i in users) {
      //   output += `<li>ID: ${users[i].id}</li>`;
      //   output += `<li>Name: ${users[i].name}</li>`;
      //   output += `<li>Email: ${users[i].email}</li>`;
      // }

      // forEach loop (slower than map())
      // users.forEach(user => {
      //   output += `<li>ID: ${user.id}</li>`;
      //   output += `<li>Name: ${user.name}</li>`;
      //   output += `<li>Email: ${user.email}</li>`;
      // });

      // map() method
      users.map(user => {
        output += `<li>ID: ${user.id}</li>`;
        output += `<li>Name: ${user.name}</li>`;
        output += `<li>Email: ${user.email}</li>`;
        return output;
      });
      document.querySelector('.lists').innerHTML = output;
    }
  };
  // SEND the request
  xhr.send();
}
