//immediately invoked functions are called as iife. they are used to when we dont want global scope pollution and want to immediately run the function.
// ()() this is the syntax od iife. wo types of iife named and un named.
//named iife
(
    function iife1(){
        console.log("Db cnnected")
    }
)();
//unamed iife
(
    ()=>{
        console.log("db 2 connected")
    }
)();

// iife is invoked immediatelybut do not know how to end it so we apply semicolon at end
//parameter
(
    (name)=>{
        console.log(`db 2 connected with parameter ${name}`)
    }
)("tooba")
