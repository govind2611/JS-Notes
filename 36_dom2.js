console.log("dom 2");
// const input = document.getElementById("input");
// const para = document.getElementById("para");
// function clicked(){
//     input.innerText = `input is provided ${input.innerText}`;
//     console.log(input.innerText);
// }

/* function to display user input value in display */
//  function submitForm(){
//     const ip = document.getElementById("input1").value;
//     const ip2 = document.getElementById("input2").value;
//     const pTag = document.getElementById("pTag");
//     pTag.innerText=`${ip} and ${ip2}`;
//  }

function clicked() {
  var myDiv2 = document.getElementById("myDiv");
  console.log("button clicked");
  // this will add test inside div
  myDiv2.innerText = `Hi ibciudcibdbsdibcidbc`;
  // this will add html inside div
  myDiv2.innerHTML = "<h1>Hiiii</h1><h2>ggggg</h2>";
}

/* Event Listeners {HTML events are "things" that happen to HTML elements.}*/

/* on click by add event listener */
const btn1 = document.getElementById("btn");
btn1.addEventListener("click", clicked);

/* mouse hover */

btn1.addEventListener("mouseover", () => {
  console.log("mouse is over the button");
  document.getElementById("myDiv").innerText = `mouse overed`;
});

/* mouse down {whetn key is pressed} */
btn1.addEventListener("mousedown", () => {
  console.log("mouse is down the button");
  document.getElementById("myDiv").innerText = `mouse down`;
});
/* mouse up {key is released}*/
btn1.addEventListener("mouseup", () => {
  console.log("mouse is up the button");
  document.getElementById("myDiv").innerText = `mouse up`;
});
/* instantly printing on console without click button */
var ip1 = document.getElementById("input1");
ip1.addEventListener("change", () => {
  console.log(ip1.value);
});
