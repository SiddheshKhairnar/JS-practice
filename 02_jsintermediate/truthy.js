// const user = "sid@gmail.com"

// if(user){
//     console.log("Logged In ")
// } else{
//      console.log("Not logged in")
// }

//falsy values
//false ,0 ,-0, BigInt 0n,"",null,undefined,NaN
//rest others are true

//some truthy values
//"0",'false'- it is string not boolean," "-space then also true,[],{},function(){}

// const empObj = {}

// if(Object.keys(empObj).length == 0){   // this condition will return an array of values
//     console.log("Object is empty");
// }


//Nullish Coalescing operator ?? null undefined

//let val1;
// val1 = 5??10 //This is mostly used in databases.
//val1 = null ?? 10 //This will return 10 to handle the value of null
//val1 = undefined ?? 15 //This will return 15 to handle the value of undefined
// val1 = null ?? 10 ?? 20 //This will return 10 as a value
//console.log(val1)  //This will return the value is 5 the starting assigned value to val1

// Ternary Operator ?:

//condition ? true : false // Use of ternary

const iceTeaPrice =100

iceTeaPrice <=100 ? console.log("Price is equal to 100"): console.log("Not equal");





