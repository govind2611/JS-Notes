//Conditional statements are used to perform different actions based on different conditions.


let hour=20;

// 1. if
if (hour < 18) {
    console.log("Good day");
}

// 2. if-else
if(hour <= 18){
    console.log("Good day");
}
else{
    console.log("Good night");
}

// 3. if-else if
if(hour < 12){
    console.log("Good morning");
}
else if(hour < 18){
    console.log("Good afternoon");
}
else{
    console.log("Good evening");
}
