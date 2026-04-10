//Async/await and .then() are both used to handle asynchronous operations in JavaScript, but async/await offers cleaner, synchronous-looking code while .then() uses chaining. Async/await uses try...catch for error handling and pauses execution, whereas .then() relies on .catch() callbacks and allows parallel execution, often leading to callback hell. 

const promisefour = new Promise(function(resolve, reject){
        setTimeout(function(){
let error = true
        if(!error){
         resolve({  username: "Tooba",
            pass: "123"})
        }else{
            reject('ERROR')
        }
        },1000)
    
})
async function getpromise(){
    try {
        const response = await promisefour
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
getpromise()

//real sjson

async function getusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log('error !!!')
    }
    
}
getusers()