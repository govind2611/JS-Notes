/*
This type of function is called immediately invoked as these functions are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function.
*/

// Regular Function.
function Greet() {
  console.log("Welcome to GFG!");
}
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function () {
  console.log("Welcome to GFG!");
})();

// WHILE EXECUTING IIFE USE GROUPING OPERATOR AND WRAP UR FUNCTION INSIDE GROUPING OPERATOT().
