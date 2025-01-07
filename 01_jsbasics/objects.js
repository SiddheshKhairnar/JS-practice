//Two types we can create object
//Object.create() //will use in later half

//const mySym = Symbol("key1") //while accessing symbol you should always use this []

// const jsuser= {
//     name : "Siddhesh",
//     age : 23,
//     // [mySym] : "key2",
//     email : "siddhesh@gmail.com"

// }


// console.log(typeof jsuser.mySym)

// console.log(typeof jsuser.age)
// console.log(jsuser["age"])

// jsuser.email="piyush@gmail.com"
// //Object.freeze(jsuser) //this will fix the value when used 
// jsuser.email="onkar@gmail.com"
//console.log(jsuser)

// jsuser.greeting = function(){
//     console.log(`Hello User ,${this.name}`)
// }

// console.log(jsuser.greeting())


// Objects Part 2 in depth

// const tinderob = new Object() //Singleton object
// console.log(tinderob)

const tinderob1 = {} //Non singletion object

// tinderob1.id = 1234
// tinderob1.name = "Rohan"
// tinderob1.IsLoggedIn = false
// console.log(tinderob1);

// console.log(Object.keys(tinderob1))
// console.log(Object.values(tinderob1))

// console.log(Object.hasOwnProperty('IsLoggedIn'))

// const regularObj = {         //Object within object

//     email :"sid@idh.com",
//     fullname: {
//         fulldetails:{
//             username:"Sid",
//             password: "Sidd111"
//         }
//     }

// }
// console.log(regularObj.fullname)


// const obj1 ={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3); // not combining two objects

// const obj3 = Object.assign(obj1,obj2)   //it combines two objects 
// console.log(obj3)

// const obj3 = {...obj1,...obj2}         // spread operator for combine two objects
// console.log(obj3);     

// const user = [
//     {
//         id :1,
//         user : "Sid",
//         pass : "Sid@123"

//     },
//     {
//         id:2,
//         user:"Ram",
//         pass: "ram@123"
//     }
// ]

// console.log(user[0].pass) //how to access value from array to object

// **** More about objects *****

const course = {

    c_name: "Js ",
    c_id : 123,
    c_teacher : "Hitesh"
}

const{c_teacher,c_name} = course
console.log(c_teacher,c_name)








