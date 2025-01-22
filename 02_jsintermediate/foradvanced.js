// const arr =[1,3,5,6,7]     //This is called forof  loop which is advanced like it automatically understands how to traverse and increment 
// for (const array of arr) {
//     console.log(array)
// }


// const map = new Map()
// map.set("IN","India")
// map.set("UK","England")
// map.set("USA","United States of America")
// for (const [key,value] of map) {
//     console.log(key,value);
    
// }

//objects are not iterable with forof loop so we use forin loop for it 

// const myObj ={
//     js: "JAVASCRIPT",
//     cpp: "C++",
//     c:"C",
// }

// for (const key in myObj) { //forin loop
//     console.log(myObj[key]); 
// }


//forEach
//const ar = ["js","cpp","c"]
// ar.forEach((val) => 
// {
//     console.log(val);
    
// })

// function greet(ar){
//     console.log(ar)
// }

// ar.forEach(greet)

// ar.forEach((items,index,array)=>{        //IT can also return index as well as array
//     console.log(items,index,array)
// })

//array in object fetching using forEach
// const arr = [
//     {
//         languagename:"js",
//         languagefile :".js"
//     },
//     {
//         languagename:"python",
//         languagefile :".py"
//     },
//     {
//         languagename:"cpp",
//         languagefile :".cp"
//     }
// ]
// arr.forEach((items,)=>{
//     console.log(items.languagefile)
// })

const array1 = [1,2,3,4,5,6,7,8]

// const val = array1.filter((num)=> num>4 )
// console.log(val)                             //filter use is easy 

// const va = array1.map((num)=> num +10)
// console.log(va)                          

const va = array1.map((num)=>{
    return num +10})
 console.log(va)