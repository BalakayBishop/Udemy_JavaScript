// Intro to JS BTS
// Webservers use different favors of JS engines
/*
	1. Syntax Parser to make sure that the JS is syntactically correct
	2. Lexical Scope -> environment where a piece of the entire code physically sits
	3. Execution Context -> container that manages the code that is currently running
*/

// ---------------------------------------------------------------------------------------------------------------------

// Global Execution and Global Object
// is a base execution context that manages the code which is not inside a function
// We can create different global variables and functions that can then be used inside the browser
// We are able to access these global variables and functions through the console command window
/*
	- When the HTML page is loaded by the web browser, if there is a script connection
	- The web browser will create a global execution context
	- It will create Global Object and this keyword for object access
*/

// ---------------------------------------------------------------------------------------------------------------------

// Execution Context and Execution Stack
/*
	- JS code exists, page is loaded, global execution context is first on stack, parser will check syntax,
	- cont., anything that needs to be on the stack will be added to the stack to execute,
	- after the functions are complete, the context is popped off the stack and removed,
	- control will go back to Global Execution Context to complete the code
	
	- When page is loaded Global Execution is created and pushed onto the stack
	- function a will be called and a's Execution Stack will be pushed onto the stack
	- a calls function b()
	- b will be pushed onto the stack
	- b calls c()
	- c will be pushed onto the stack
	- c will execute, and its execution context will pop off the stack
	- control is given back to b to execute and then pop its context off the stack
	- control is given back to a to execute and then pop its context off the stack
	- since there is no more after the call to a Global Execution will pop off the stack and the code will end
*/
// Example of the Execution Stack
function a() {
	let name = 'John'
	b()
	console.log(name)
}

function b() {
	let name = 'Bob'
	c()
	console.log(name)
}

function c() {
	let name = 'Alex'
	console.log(name)
}

a()

// ---------------------------------------------------------------------------------------------------------------------

// Scope and Scope Chain
/*
	- Scope in programming refers to the visibility of variables and functions
	- Global Scope -> can access the variable or function from anywhere
	- Function Scope -> each function creates a new scope and can only be accessed in that function
	- Nested Local Scope -> if we create another function in function a(), it will create its own local scope
		- The variables inside the of nested function will only be visible inside that nested function
		- Example: function a has num2 = 10, which is only visible in function a(), inside function a() there is
			- function b(), function b() create num3.
			- Num3 is only available to function b() and cannot be seen by function a()
	- Scope Chain: accessible from inner to outer, but not outer to inner
	- Example:
*/
let num1 = 5
function d() {
	let num2 = 10
	function e() {
		let num3 = 15
		console.log(num1 + num2 + num3) // this is allowed because inner scope can see the outer scope variables
	}
	e()
}
d()

// console.log(num1 + num2 + num3) // this is not allowed since we are not allowed to see inner scoped variables

// ---------------------------------------------------------------------------------------------------------------------

// Hoisting -> rather than failing, the JS Engine will give undefined to variables that are used before definition
// Example -> a will be undefined because it is not defined as 10 before it is used to print to console
// console.log(j) // this will print 'undefined'
console.log(k()) // prints 20

let j = 10
function k () {
	return 20;
}

console.log(j) // this will print 10

// ---------------------------------------------------------------------------------------------------------------------

// Objects vs Primitives
/*
	- if a primitive is created (a = 10) then memory is allocated for the variable
	- if another primitive is created (b = a) then more memory is allocated with the value of a
	- if a is changed (a = 20) the value of a in memory will be 20, but the value of b will still be 10
	VERSUS
	- if an object is created (c = {name: 'Blake'}) then memory is allocated to store this object
	- if another object is created and initialized to the value of c (d = c), then there is no new memory allocated
	- rather than allocating more memory the JS Engine will just point d to the memory location of the object
	- therefore both c and d will point to the same memory location
	- if the name property of the object is changed then it will be changed for both c and d
*/

let f = 10
let g = f

console.log(f) // -> prints 10
console.log(g) // -> prints 10

f = 20

console.log(f) // -> prints 20
console.log(g) // -> prints 10

let h = {
	name: 'Blake'
}

let i = h

console.log('h = ' + h.name) // prints Blake
console.log('i = ' + i.name) // prints Blake

h.name = 'Hannah'

console.log('h = ' + h.name) // prints Hannah
console.log('i = ' + i.name) // prints Hannah

// We can also use the = to reassign/create new object in that memory

h = {
	name: 'John'
}

console.log('h = ' + h.name) // prints John
console.log('i = ' + i.name) // prints Hannah

// ---------------------------------------------------------------------------------------------------------------------

// 'this' Keyword
/*
	- Frequently used
	- a bit different from other languages
	- when page is loaded in browser, browser creates Global Execution, Global Window Obj and 'this'
	- 'this' === window/object name
	- function a() { console.log(this) } a() will print window because this === window in local context
	- we can use the this keyword inside a method object to get the values of that object
*/

let person = {
	firstName: 'John',
	lastName: 'Smith',
	fullName: function() {
		console.log(this === person) // prints TRUE
		return this.firstName + ' ' + this.lastName // using 'this' keyword to refer to the object itself
	}
}

person.fullName()

// ---------------------------------------------------------------------------------------------------------------------























