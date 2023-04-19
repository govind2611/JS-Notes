/* Web API */

/*
    API :- Application Programming Interface
*/

/*
    What is an API?

    An API is a set of defined rules that explain how computers or applications communicate with one another. APIs sit between an application and the web server, acting as an intermediary layer that processes data transfer between systems.

*/

/* 
    4 methods/ intentions for what we hit a url 
        1. Get
        2. Post
        3. Put
        4. Delete
*/

/*   1. Get   */

// fetch("https://dummyjson.com/quotes", {method: "GET"})
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     let arr = data.quotes;
//     arr.forEach((item) => {
//         document.getElementById("myDiv").innerHTML +=`
//         <h2>${item.id}. ${item.author}</h2>
//         <p> ${item.quote}</p>
//     `
//     });

//   })
//   .catch((err) => {
//     console.log(err);
//   } )

/* 2. POST */
// let url = "https://dummyjson.com/products/add";
// let object = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "..."
//   }),
// };

// fetch(url, object)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

/* 3. Put */

/* updating title and product of product with id 1 */
// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'iPhone Galaxy +1',
//     brand :  "Samsung"
//   })
// })
// .then(res => res.json())
// .then(console.log);

/* 4. Delete */

fetch("https://dummyjson.com/products/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then(console.log);

// fetch("https://dummyjson.com/quotes/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     document.getElementById("myDiv").innerHTML =`
//         <h2>${data.id}. ${data.author}</h2>
//         <p> ${data.quote}</p>
//     `
//   })
//   .catch((err) => {
//     console.log(err);
//   } )

// fetch("https://dummyjson.com/quotes")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     let arr = data.quotes;
//     arr.forEach((item) => {
//         document.getElementById("myDiv").innerHTML +=`
//         <h2>${item.id}. ${item.author}</h2>
//         <p> ${item.quote}</p>
//     `
//     });

//   })
//   .catch((err) => {
//     console.log(err);
//   } )
