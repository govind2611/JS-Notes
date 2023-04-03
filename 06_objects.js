/*
    Objects are variables too. But objects can contain many values.
    This code assigns many values (Fiat, 500, white) to a variable named car:
*/

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(car);// prints whole obj in console

/*The values are written as name:value pairs (name and value separated by a colon).*/

//You can access object properties in two ways:

  car.type; // print type of car
  car["type"];


  // array inside object
  var obj ={
    fname: "Govind",
    age: 23,
    subjects: ["math", "js", "java", "html"]
  }

  console.log(obj.subjects);
  console.log(obj.subjects[1]);

  // function inside objject

  var obj2={
    fname: "Govind",
    age: 23,
    contact: function() {
     return "9673957874";
    }
  }
  console.log(obj2.contact());


  // object inside object
  var obj3 ={
    fname: "Govind",
    age: 23,
    living: {
      city:"latur",
      state: "maharshtra",
      country: "India"
    }
  }
  console.log(obj3.living.city);
