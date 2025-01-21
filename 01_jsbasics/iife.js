// Immediately invoked function expressions
// to avoid global pollution we use iife
(function sid(){      //This is named iife              //This is called as iife function where object is wrapped within function
    console.log(`DB Connected`)
})(); //give ; here because it is iffe , it will give error if don't use it

((name) =>{
    console.log(`DB Two connected ${name}`)
})('Siddhesh');

