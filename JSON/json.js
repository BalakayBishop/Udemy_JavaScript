// JSON
/*
	JavaScript Object Notation
	- sending and receiving data in text format
	- syntactically like JS object
	- lightweight data-interchange format
	- written in name value pairs
	- names in double quotes
	- value pairs can or cannot be in double quotes
	- data types: number, string, object, array, boolean, null
*/

// Creating JS Object with attributes
let myObj = {
	name: "John",
	age: 27,
	married: true,
	childrenNames: ['Jane', 'Mark']
}

// Converting JS Obj to JSON text
let myData = JSON.stringify(myObj)

console.log(myData)

// JSON text
let newObj = '{"name": "John","age": 27,"married": true,"childrenNames": ["Jane", "Mark"]}'

// Converting JSON text to JS Obj
let newData = JSON.parse(newObj)

console.log(newData)
