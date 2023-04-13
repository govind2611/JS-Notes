/*js is prototype oriented language before object oriented language */

/*
The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. 
*/

/* prototype is just a structure in front of the object */
console.log("proto");
let arr = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
arr.push(55);
console.log(arr);
console.log(arr2);
let string = "Govind Chavan";
console.log(string.__proto__);

function myNmae(){
    console.log("govind");
}
myNmae();
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    username(){
        return `my name is ${this.name}`;
    }
    myEmail(){
            return `email is ${this.email}`;
    }
}

let user = new User("Govind", "agovindchavanb@gmail.com");
console.log(user);