// const promOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("Asyn task complete");
//     resolve()
//     },1000)    
// })

// promOne.then(function(){
//     console.log("Asyn task resolve")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("second task");
// })

// //Two ways of writing promises but first one is promised

// const proThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chai@ex.com"})
//     },1000)
// })

// proThree.then(function(user){
//     console.log(user);
// })

// const promFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"hitesh",password:"123"})
//         }else{
//             reject('ERROR : something went wrong')
//         }
//     },1000)
// })

// promFour.then((user)=>{
//     console.log(user);
//     return user.username
    
// }).then((username) =>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected"))


// const proFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//                 let error = true
//                 if(!error){
//                     resolve({username:"js",password:"123"})
//                 }else{
//                     reject('ERROR : js went wrong')
//                 }
//             },1000)
// })

// async function consumePro() {
//     try{const response =await proFive
//     console.log(response);}
//     catch(error){
//         console.log(error)
//     }
    
// }
// consumePro()

// async function getAllUsers() {
//     try{const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const dt = await response.json()
//     console.log(dt);
//     }catch(error){
//         console.log(error)
//     }
// }   
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
.finally('Completed successfully')
