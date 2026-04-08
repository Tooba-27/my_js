//reduce prototypr of array
//The JavaScript reduce() method is an iterative array method that executes a user-supplied "reducer" callback function on each element of an array to accumulate them into a single output value. 
const array = [1,2,3,5]
let initialvalue = 0
 const sum = array.reduce((accumulator , currentvalue) =>{
    console.log(`accumulator is ${accumulator} and currentvalue is ${currentvalue}`)
      let total = accumulator + currentvalue
       return total
    } , initialvalue)

 console.log(sum);

 // accumulator contains the initial value in case that initial value is given otherwise it is array[0]. initial value is loaded once in the accmulator. then whatever the return value of statement is next to call back function..that value is loaded in the accumulator.
 //current value is current index of array in the iteration .. in case of iniial value not given its array[1].

 const shoppingCart = [

    {
        coursename: "webdevelopment",
        price: 2000 
    },
    {
        coursename: "node js",
        price: 3000 
    },
    {
        coursename: "python",
        price: 2000 
    },
 ];

 const totalprice = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
 },0)

 console.log(totalprice)