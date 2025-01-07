
// const arr = [1,2,6,9,10]

// const arr1 = ["Marvel","DC","Comics"]

// console.log(arr[2])

//arr.push(8) //adds element at last
//arr.pop() //removes element from last
//arr.unshift(5) //add the element at first index

//arr.shift() //It removes the first element 

//console.log(arr.includes(5)) //returns true or false whether the given element present or not
// const myarr = arr.join() //converts the present arr into string
// console.log(arr) 
// console.log(myarr) 

//slice and splice two main functions which also may asked in the interview

// console.log("A",arr)

// const arr2 = arr.slice(0,2) // when using slice the original arr remains same
// console.log(arr2);
// console.log("B",arr)

// const arr3 = arr.splice(0,3)
// console.log(arr3);
// console.log("C",arr) //when using splice the original arr is changed

//Advanced concept of Array

const crick = ["Dhoni","Virat","Rohit"]
const foot = ["Ronaldo","Messi","Pele"]

// crick.push(foot)
// console.log(crick) // This will print array within array

// const com = crick.concat(foot) //This will print the combine of array
// console.log(com)

// const com1 = [...crick,...foot] //spread operator will also combine array but it is more preferred nowadays for coding
// console.log(com1)

// const arr4 = [1,3,4,[2,3,4],[9,8,0]]

// console.log(arr4.flat(Infinity)) //This will return an complete array by spreading it

// console.log(Array.isArray("Siddhesh")) //Will return true or false if array is there or not

// console.log(Array.from("Siddhesh")) //it converts it into an array can be used in object as well

let score1=100
let score2=200
let score3= 300

console.log(Array.of(score1,score2,score3)); //it will convert it into array






