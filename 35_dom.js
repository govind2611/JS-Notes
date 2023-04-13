/*Document Object Model*/
console.log("DOM");

/*
HTML is used to structure the web pages and Javascript is used to add behavior to our web pages. When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So, a corresponding document is created(DOM).
*/
/*
Document ->  All the HTML CSS & JS converts into into document in a browser
 */
/*
DOM is basically the representation of the same HTML document but in a different format with the use of objects. Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>) in HTML document but can understand object h1 in DOM.
*/

/*
The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:
*/

/* it will show the html, css, js in document */
console.log(document);

/* to accesss body { styled body also} */
// document.body.style.backgroundColor="red";

/* to select the elements */
var heading = document.getElementById("heading");
var button = document.getElementsByClassName("btn");
var input = document.querySelector("#input");
var para = document.querySelectorAll(".para");
var h1 = document.getElementsByTagName("h1");
// console.log(heading, button, input, para, h1);

/* button click function */
// function clicked(){
//     console.log("button was clicked");
//     document.body.style.backgroundColor= "purple";
// }
// on click is a attribute which works on every element

/* how to acces parent and siblings */

// var parentOfHeading = heading.parentElement;
// console.log(parentOfHeading); // body will be parent
// var nextSibling = heading.nextElementSibling;
// console.log(nextSibling); // button
// var prevSibling = heading.previousElementSibling;
// console.log(prevSibling);

// parent element vs parentNode

/* When there is no parent then only we can get the difference between them */

// var parentOfHeading = heading.parentElement;
// console.log(parentOfHeading);
// var parentNode = heading.parentNode;
// console.log(parentNode);
// both will return same output because they have parent

/* PARENT ELEMENT CAN BE NULL BUT PARENT NODE WILL ALWAYS RETURN SOMETHING 
IF THERE IS NO PARENT FOR PARENT NODE IT WILL RETURN DOCUMENT*/

// manipulating css
/*heading.style.color ="white";
heading.style.fontSize = "40px";
heading.style.textAlign = "center"; 
heading.style.backgroundColor = "black";
heading.style.border = "2px solid green";
heading.style.padding = "5px";
*/

// reading values
function clicked() {
  var inputVal = input.value;
  console.log(inputVal);
}
console.log(heading.innerText);
console.log(heading.innerHTML);
