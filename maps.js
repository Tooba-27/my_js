//The JavaScript Map Object
//The Map object is a built-in data structure introduced in ES6 that holds key-value pairs and remembers the original insertion order of the keys. 
//example
const userRoles = new Map();

userRoles.set('alice', 'admin'); // Add entries
userRoles.set('bob', 'user');

console.log(userRoles.get('alice')); // Output: admin
console.log(userRoles.has('bob')); // Output: true
console.log(userRoles.size); // Output: 2
//if we want to get key value both
for (const [name, role] of userRoles) { // Iterate using entries() by default
  console.log(`${name} is a ${role}`);
}

// map no 2

//The Array.prototype.map() Method
//The .map() method is a higher-order function available on all Array instances. It creates a new array populated with the results of calling a provided function on every element in the calling array, without changing the original array.
const number = [1,2,3,4,5,6,7,8,9,10]
 const ans = number
 .map((num) => num+10)
 .map((num) => num * 10)
 .filter((num) => num>= 140)
 console.log(ans)
