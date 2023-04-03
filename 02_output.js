/*
JavaScript can "display" data in different ways:
    Writing into an HTML element, using --> innerHTML.
    Writing into the HTML output using --> document.write().
    Writing into an alert box, using --> window.alert().
    Writing into the browser console, using --> console.log().
*/

// code block

/* 
    JavaScript statements can be grouped together in code blocks, inside curly brackets{...}.
    The purpose of code blocks is to define statements to be executed together.
*/

function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
