// Type Coercion -> a value from one type can be converted on the fly
// Dynamically typed and depends on runtime variables

let a  = 10 + 5
console.log(a) // this prints 15

let b = 10 + '5'
console.log(b) // this prints 105
// in this statement the 10 is type coerced into a string instead of a number because of the + operator

let c = 10 * '5'
console.log(c) // this prints 50
// the 5 is type coerced into a number because the * operator is only used in arithmetic operations

let d = 5 + 10 + 'b' // prints -> 15b
let e = 'b' + 5 + 10 // prints -> b510 both 5 and 10 are coerced to strings

// Boolean values can be coerced to int where 0 is false and 1 is true
let f = 5 === 5 // -> TRUE
let g = f === 5 // -> FALSE because TRUE is NOT == to 5 OR 1 != 5
// the boolean f is type coerced into a number (1) to strictly compare to 5