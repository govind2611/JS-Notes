// parent class
class Person {
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed";
  }

  greet() {
    console.log(`Hello ${this.name}.`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    // call the super class constructor and pass in the name parameter
    super(name);

    // Overriding an occupation property
    this.occupation = "Student";
  }

  // overriding Person's method
  //greet() {
  //   console.log(`Hello student ${this.name}.`);
  //   console.log("occupation: " + this.occupation);
  // }
}

let p = new Student("Govind");
p.greet();
console.log(p);

/* getters and setters */


class User {
    constructor(myEmail, myPhone, myUsername, myPassword) {
      this.name = "";
      this.email = myEmail;
      this.phone = myPhone;
      this.username = myUsername;
      this.password = myPassword;
    }
  
    get getName() {
      return "Mr. " + this.name;
    }
  
    set setName(myName) {
      this.name = myName.slice(0, 1).toUpperCase() + myName.slice(1);
    }
  }
  
  var user1 = new User("avi@gmail.com", "9999", "avi_", "jshsjh");
  console.log(user1);
  
  user1.setName = "avi";
  
  console.log(user1.getName);