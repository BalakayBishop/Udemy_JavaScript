// Operators
let a = 5 + 5
let b = 5 - 5
let c = 5 * 5
let d = 5 / 5

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Operator Precedence -> JS follows normal operator precedence
let e = (5+5) * 5
console.log(e) // 50

// Comparison Operators -> used in logical statements to determine equality
let f = 5
let g = '5'
let h = (f == g) // prints true
console.log(h)

// Strict Comparison
let i = (f === g) // this prints false because it compares type and value strictly
console.log(i)