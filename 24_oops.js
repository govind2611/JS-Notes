/* Object Oriented Programming */

/*
When the language follows these four pillars then it is called as oop language:

    1. Abstract
    2. Inheritance
    3. Polymorphism
    3. Encapsulation
*/

/* Encapsulation */

/*
The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -

Use var keyword to make data members private.
Use setter methods to set the data and getter methods to get that data.
The encapsulation allows us to handle an object using the following properties:

Read/Write - Here, we use setter methods to write the data and getter methods read that data.

Read Only - In this case, we use getter methods only.

Write Only - In this case, we use setter methods only.

*/

class Student{  
    constructor(name, age)
    {  
       this.name = name;
       this.age = age;
    }   
}  
    var stud=new Student("John", 80 );  
    console.log(stud.name+" "+stud.age); 


    /* abstraction */

    /*
    An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one. 
    */

    /*Inheritance */
    /*
    To create a class inheritance, use the extends keyword.
    A class created with a class inheritance inherits all the methods from another class:
    */

    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        present() {
          return 'I have a ' + this.carname;
        }
      }
      
      class Model extends Car {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        show() {
          return this.present() + ', it is a ' + this.model;
        }
      }
      
      let myCar = new Model("Ford", "Mustang");
      console.log( myCar.show());

      /*Polymorphism */
      /*
      Polymorphism means the same function with different signatures is called many times
      */
      class firstClass {
        add() {
            console.log("First Method")
        }
    }
    class secondClass extends firstClass {
        add() {
            console.log(30 + 40);
        }
    }
    class thirdClass extends secondClass {
        add() {
            console.log("Last Method")
        }
    }
    var ob = new firstClass();
    var ob2 = new secondClass();
    var ob3 = new thirdClass();
    ob.add();
    ob2.add();
    ob3.add();