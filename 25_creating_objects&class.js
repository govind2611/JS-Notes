/* creation of object */

// 01. object literals { hard coding}
var user1 = {
  name: "Avi",
  email: "avi@gmail.com",
  phone: "99999999",
  history: "history",
  gender: "male ",
};

console.log("User1 ---> ", user1);

// 02. with the help of function

function createUser(name1, email1, phone1, history1, gender1) {
  return {
    name: name1,
    email: email1,
    phone: phone1,
    history: history1,
    gender: gender1,
  };
}

var user2 = createUser(
  "Avi2",
  "avi2@gmail.com",
  "9999222229999",
  "history2222",
  "male222"
);

console.log(user2);

// an object is an instance of the class{ class is the blueprint }

// 03. using class

class User {
  constructor(name, email, phone, history, gender) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.history = history;
    this.gender = gender;
  }
}

var user3 = new User("Abc", "abc@gmail.com", "229999", "hist", "male");
console.log(user3);
/* here user 3 is an object(instance) of User class */
/* this refers to user 3 means this refers to current object */
/* constructor is first function which get automatically get called while creation of the object */

// factory function
/* a function which return object is factory function */
function createUser(name1, email1, phone1, history1, gender1) {
  return {
    name: name1,
    email: email1,
    phone: phone1,
    history: history1,
    gender: gender1,
  };
}

var user2 = createUser(
  "aaaaaaaa",
  "aaaa@gmail.com",
  "8888888888",
  "hnnnnnn",
  "male"
);

console.log(user2);

// private properties/ function in js

/* to make a variable private in js just place # in front of variable and to make a class
  private just put the # infront of it 
*/
// class bankAccount {
//   #accountNumber;
//   constructor(accountNumber) {
//     this.#accountNumber = accountNumber; // # wont allow user to acces data of accou8nt number because it is private
//   }
//   #getaccNo() {
//     return this.#accountNumber;
//   }
// }
// var myAccount = new bankAccount("A1-A2-A3-A4-A5");
// console.log(bankAccount.getaccNo());
// console.log(myAccount);

/*PII:- Personal Identifiable Information */

/*practice*/

// normal objet

var me = {
  name: "Govind",
  age: 22,
  class: 10,
};

console.log(me);

// using function
function createMe(name2, age2, class2) {
  return {
    name: name2,
    age: age2,
    class: class2,
  };
}
var me2 = createMe("govind", 22, 10);
console.log(me2);

// using class

class createMe2 {
  constructor(name, age, class2) {
    this.name = name;
    this.age = age;
    this.class = class2;
  }
}

var me3 = new createMe2("Govind", 22, 10);
console.log(me3);
