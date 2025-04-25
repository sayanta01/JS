fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json()) // Convert response to JSON
  .then((data) => console.log(data)) // Log the data
  .catch((err) => console.error("Error:", err));
