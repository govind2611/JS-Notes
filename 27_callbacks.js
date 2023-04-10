console.log("callback functions");
/*A callback is a function passed as an argument to another function */

// function sayHii(sayBye){
//     console.log("Hii");
//     sayBye();
// }
// function sayBye(){ 
//     console.log("Bye");
// }
// sayHii(sayBye);

/* problem :- you are owner of restaurant and want to create a system for restaurant as followws

    greet -> take order -> prepare food -> give food -> take payment -> thank customer */

function greet(takeOrder){
    console.log("Welcome to our Restaurant");
    takeOrder(prepareFood);
}
function takeOrder(prepareFood){
    console.log("What do u want eat, sir?");
    prepareFood(giveFood);
}
function prepareFood(giveFood){
    console.log("Preparing the food");
    giveFood(takePayment);
}
function giveFood(takePayment){
    console.log("Giving the food");
    takePayment(thanks);
}
function takePayment(thanks){
    console.log("Taking the payment");
    thanks();
}
function thanks(){
    console.log("Thank you for using our restaurant");
} 

greet(takeOrder); // call back hell or pyramid of doom

