// Date Object
let date = new Date();

console.log(date)

let newDate = new Date("January 6, 2023 10:14:00")
console.log(newDate)

// Date obj has its own methods -> get and set methods
let year = date.getFullYear()
let month = date.getMonth()

console.log(year)
console.log(month)

date.setFullYear(2042)
date.setMonth(12)

console.log(year)
console.log(month)