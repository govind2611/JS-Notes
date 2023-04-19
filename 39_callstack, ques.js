/* 
    Callstack is just a section in js engine which store the code travel throught code line by line abd send the data to respected dept to perform the work on it.as soon as the code comes in callstack, callstack just says get rid of it and deliver the code to respective department
*/

/*
    web api : see next js file
*/

/**
    task queue  / callback queue : if there is time delay function in code like set timeout then web api will set a timer of given time and send the code to task queue. task ques work is simple it stores the tasks

 */
/* micro task queue : it is given more priority than task queue. if there is a promise theen it will be given high priority that any one. it is as like as task queue.  */

/**
    event loop : each browser has this rotating method which is continously running. it just waits for task when task que will give the work to him to do thw work. event loop takes the work fromm task queu and pass to the call stack to do the work and the the work gets completed by the call stack

 */
