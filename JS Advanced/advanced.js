/*
	Everything is an Object
	- everything except for primitive data is an object in JS
	- Example with arrays
*/

let arr = [1, 2, 3]
arr[3] = 4
arr.prop = 'Hello'

console.log(arr)
console.log(arr.prop)


/*
	Functions
	- functions are invokable
	- example to show that you can add objects to functions because they are objects
*/

function a() {
	console.log('Hello')
}

a['prop'] = 'Hi'

a.obj = {
	greet: 'Hey'
}

a.myFunc = function() {
	console.log('Hola')
}

// ------------------------------------------------------------------------------------------------------------------
/*
	Object Literal Notation
*/

let person1 = {}
person1.firstName = 'John'
person1.lastName = 'Smith'

let person2 = {}
person2.firstName = 'Alex'
person2.lastName = 'Doe'

// function createPerson(firstName, lastName) {
// 	let newPerson = {}
// 	newPerson.firstName = firstName
// 	newPerson.lastName = lastName
//
// 	return newPerson
// }

// let person3 = createPerson('Bob', 'Brown')
// let person4 = createPerson('Marry', 'Jane')

// ------------------------------------------------------------------------------------------------------------------
/*
	Function Constructor
	- function ctor is used to create function object
	- we need to use the 'new' keyword for the Function Ctor
	- JS has built-in function ctor
		- new Object, Date, Array, String, Number
*/

// function Person(firstName, lastName) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// }
//
// let person3 = new Person('Bob', 'Brown')
// let person4 = new Person('Marry', 'Jane')

// let strObj = String(`Hello`)
//
// console.log(person1)
// console.log(person2)
// console.log(person3)
// console.log(person4)
// console.log(strObj)

// ------------------------------------------------------------------------------------------------------------------
/*
	Prototypal Inheritance
	- every object inherits properties and methods from its prototypes
	- the prototype is automatically assigned
	- Prototypal vs Classical inheritance
	- using the literal {} is the same as the obj ctor notation
	- both literal and ctor will be assigned __proto__ with is the prototype global function
	- a function will also be assigned an Object prototype and the __proto__: Object
*/

let b = {}
let c = new Object()

console.log(b)
console.log(c)

function d() {

}

function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

// this is a better way of creating this internal method because it is shared and only takes one spot in memory
Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName
}

let person5 = new Person('John', 'Doe')
let person6 = new Person('Jane', 'Doe')

console.log(person5)
console.log(person6)

console.log(person5.getFullName())
console.log(person6.getFullName())

// ------------------------------------------------------------------------------------------------------------------
/*
	Object.create()
*/

// let obj1 = Object.create(Object.prototype, {
// 	name: {
// 		value: 'John'
// 	}
// })

function NewPerson() {
	this.name = 'John'
}

Person.prototype.greet = 'Hello'

// These two will not be exactly the same
// they will both have greet in their proto, but only person7 will have name = 'John'
let person7 = new NewPerson();
let person8 = Object.create(NewPerson.prototype)


// Example of creating objects with defined Object prototypes for the __proto__
let firstProto = {
	sayHello: function(){
		return 'Hello' + this.name
	}
}

let john = Object.create(firstProto, {
	name: {
		value: 'John'
	}
})

console.log(john)

// this will have both sayHi and sayHello
let secondProto = Object.create(firstProto, {
	sayHi: {
		value: function() {
			return 'Hi' + this.name
		}
	}
})

let bob = Object.create(secondProto, {
	name: {
		value: 'Bob'
	}
})

// bob will contain both sayHi and sayHello because of the prototype structure
console.log(bob)

// This will create a completely empty Object with no connection to any prototypes
let obj = Object.create(null)

// ------------------------------------------------------------------------------------------------------------------
/*
	First-Class Functions
	- store functions in a variable
	- use function as a variable
	- pass functions as a parameter
	- return functions from other functions
*/

// function as a variable
let z = function() {
	console.log('Hello')
}

z()

// function as a parameter
function sum(num1, num2, fn) {
	console.log(num1+num2)
	console.log(fn())
}

sum(5, 10, function() {
	return 'function executed'
})

// OR

function done() {
	return 'function executed'
}

sum(5, 10, done)

let scores = [55, 80, 35, 87, 91]

function checkResult(arr, fn) {
	let newArr = []
	for(let i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]))
	}
	return newArr
}

function passOrFail(score) {
	return score >= 51
}

console.log(checkResult(scores, passOrFail))

// ------------------------------------------------------------------------------------------------------------------
/*
	First-Class Functions pt. 2
*/
// Return function from a function
function finalResult(score) {
	if (score >= 81) {
		return function(name) {
			console.log(name + ', you passed! Entrance to University')
		}
	}
	else if (score >= 51) {
		return function (name) {
			console.log(name + ', you passed! Entrance to College')
		}
	}
	else {
		return function (name) {
			console.log(name + ', you failed.')
		}
	}
}

let result1 = finalResult(77)
result1('John')

let result2 = finalResult(44)
result2('Mark')

// Shorthand
finalResult(96)('Jane')

// ------------------------------------------------------------------------------------------------------------------
/*
	Immediately Invoked Function Expression (IIFE)
	- runs immediately after being invoked
*/

// function e() {
// 	let f = 'from function e'
// 	return f
// }
//
// function g() {
// 	let f = 'from function g'
// 	return f
// }
//
// let f = 10
// let f = 20
//
// console.log(f)
// console.log(e())
// console.log(g())

// IIFE
// 	(function(name) {
// 		console.log('Hello ' + name)
// 	}('John'));

let iife = function() {
	console.log('Hi')
	return 'Hello'
}();

console.log(iife)

// ------------------------------------------------------------------------------------------------------------------
/*
	Closures
	- function has access to the variables of its outer function even after the execution context of the outer
	 function is finished
*/

function calc(num1) {
	let num2 = 10
	return function(num3) {
		sum = num1 + num2 + num3
		console.log(sum)
	}
}

let add = calc(5)
add(15)
// OR
calc(5)(15)

// Closures
function h() {
	let arr = []
	for(let i = 0; i < 3; i++) {
		arr.push(function() {
			console.log(i)
		})
	}
	return arr
}

let j = h()
j[0]() // 3
j[1]() // 3
j[2]() // 3

// ------------------------------------------------------------------------------------------------------------------
/*
	call(), apply(), bind()
*/

let person = {
	firstName: 'John',
	lastName: 'Smith',
	fullName: function() {
		return this.firstName + ' ' + this.lastName
	}
}

let definePerson = function(age, job) {
	console.log(this.fullName() + ' is ' + age + ' years old and he is a ' + job)
}

// .call()
definePerson.call(person, 28, 'developer')

// .apply() -> arg list needs to be an array
definePerson.apply(person, [30, 'designer'])

// .bind() -> does not invoke a function
let getPerson = definePerson.bind(person)
getPerson(19, 'student')































