//promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Asynchronous operations in JavaScript allow long-running tasks—such as network requests, file reading, or timers—to execute in the background without blocking the main execution thread. This ensures that web applications remain responsive and do not "freeze" while waiting for a task to complete. 

//promises can be created or consumed.hey are mosty consumed.
 //promise creation 
// their is a callback function in proimise with resolve and reject as parameters
 const promiseone = new Promise(function(resolve, reject){
 setTimeout(function(){
    console.log('async operation started')
    resolve()
 } , 2000)

// do an async task
// db calls , network , cryptoraphy
 })

//consumption
 //resolve has direct relation with .then
// in .then we have a callback function..that automatically receives an argument of whatever done while creating the promise

promiseone.then(function () {
    console.log('promise consumed.');
    
})

// it can also be written as follows
 new Promise(function(resolve, reject){
 setTimeout(function(){
    console.log('async2 operation started')
    resolve()
 } , 2000)

 }).then(function () {
  console.log('promise2 consumed')  
 })

 // data passing an consumption

 const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('async task three completed')
        resolve({
            username: "Tooba",
            email: "abc@gmail.com"
        })
    },1000)
 })

promisethree.then(function(user){
console.log(user)
})

// catch for error

const promisefour = new Promise(function(resolve, reject){
        setTimeout(function(){
let error = false
        if(!error){
         resolve({  username: "Tooba",
            pass: "123"})
        }else{
            reject('ERROR')
        }
        },1000)
    
})

promisefour.then(function(user){
 console.log(user)
 return user.username
}).then(function (username) {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

//Async/await and .then() are both used to handle asynchronous operations in JavaScript, but async/await offers cleaner, synchronous-looking code while .then() uses chaining. Async/await uses try...catch for error handling and pauses execution, whereas .then() relies on .catch() callbacks and allows parallel execution, often leading to callback hell. 

const datausers = fetch('https://jsonplaceholder.typicode.com/users') //.it wil give promise
datausers.then(function(users){
const data = users.json()
return data
}).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log('error')
})
// if  you get error 404 ..it is handled by respons not reject..rejct only handles errors that occus if we are not able to connect tothe network