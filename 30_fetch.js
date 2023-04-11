console.log("fetching data");

fetch("https://dummyjson.com/quotes/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  /* .json actually return a promise so that after .json we have to write .then 
   to get the data from object
    */

  fetch("https://dummyjson.com/quotes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });