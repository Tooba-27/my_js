//for of loop The for...of loop is a modern JavaScript feature (introduced in ES6) that iterates directly over the values of iterable objects such as Arrays, Strings, Maps, Sets, and more.
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
//maps are same as objects but the values cant be repeated and sequence is obseved.
//A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages. maps differ from standard objects in that keys can be of any data type.
const fruits= new Map()
fruits.set("apple",500)
fruits.set("banana",600)
fruits.set("mango",800)
console.log(fruits)
for (const [key , value] of fruits) {
    console.log(`price of ${key} is ${value}`)
}
// for of loop cant be used in objects beause pbjects are not itrative
// for in loop
const myobj = {
    js: "javascript",
    cpp: "c++",
    web: "webdevelopment"
}
for (const key in myobj) {
   console.log(key) // it wil give key
   console.log(`${key} is called as ${myobj[key]}`)
    
}
//array
const names = ["ali","ammara","ayesha","fizzah"]
for (const key in names) {
   console.log(key) // it wil give key in array as well
   console.log(names[key])
   
}
// in for of loop ..direct value is given but in for in loop key is dumped
// for in not on maps
//for each 
const lang = ["urdu","english","isl"]
lang.forEach( function (val){
    console.log(val)
})
// other function an be given as reference..write oly name in bracket
// arra and obj
const mycoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
    {
        languageName: "java",
        languageFile: "java"
    }
]
mycoding.forEach((item)=> {
    console.log(item.languageName)
})
