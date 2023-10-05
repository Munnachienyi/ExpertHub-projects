async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].id);
  }
}
getUsers();
