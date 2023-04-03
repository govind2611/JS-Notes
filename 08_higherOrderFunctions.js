/* 
    A function which that take other function as argument or return a function as their result is called as higher order function
*/

const myName = (name) => {
  if (name == "Govind") {
    return function (topic) {
      console.log(`hi ${name}. What is your fevourite SUBJECT ? :- ${topic}`);
    };
  } else {
    return function () {
      console.log("error occured");
    };
  }
};

myName("Govind")("JS");
