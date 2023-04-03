/*
    A callback is a function passed as an argument to another function
    This technique allows a function to call another function
    A callback function can run after another function has finished
*/

// set Timeout

const funA = () => {
  setTimeout(function () {
    console.log("funA is Called");
  }, 3000);
};

const funB = () => {
  console.log("funB is Called");
};

funA();
funB();

/* HERE the problem is that we have to wait for the completion of  b func 
    here funb is printd first and and the funa is printed so to 
    avoid this callback is introduced
*/

// callback is way to make sure that certain code is wait untill current code get finished

const funcA = (friend, callback) => {
  setTimeout(function () {
    console.log(`hi ia ${friend}`);
  }, 3000);
  callback();
};

const funcB = () => {
  console.log("funB is Called");
};

funcA("Govind", funcB);

const add = (a, b, average) => {
  setTimeout(() => {
    console.log(a + b);
  }, 3000);
  average(a, b);
};

const avr = (a, b) => {
  setTimeout(() => {
    console.log((a + b) / 2);
  }, 3000);
};

add(5, 5, avr);

//callback hell
/*
    Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 
*/

const findRoll = () => {
  setTimeout(() => {
    let roll = [1, 2, 3, 4];
    console.log(roll[2]);

    setTimeout(
      (roll) => {
        const data = {
          age: 24,
          name: "Govind",
        };
        console.log(`My name is ${data.name} and i am ${data.age} old.`);

        setInterval(
          (name) => {
            data.gender = "Male";
            console.log(
              `My name is ${data.name} and i am ${data.age} old. i am ${data.gender}`
            );
          },
          3000,
          data.name
        );
      },
      2000,
      roll[2]
    );
  }, 3000);
};

findRoll();
