// ! callbacks

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//  !CALLBACK method is a function passed to another function as an argument, which is invoked inside the othe function to complete the callback. first call the first function in 1 second then the second function in 2 seconds

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post three", body: "This is post three" }, getPosts);
