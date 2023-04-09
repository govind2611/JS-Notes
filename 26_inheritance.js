/*
Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
Using class inheritance, a class can inherit all the methods and properties of another class.
Inheritance is a useful feature that allows code reusability.
To use class inheritance, you use the extends keyword
*/
// ex 01
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

// ex 02

// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {}

let student1 = new Student("Jack");
student1.greet();
