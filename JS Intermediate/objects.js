// Objects -> collections of related variables and functions which are represented as name/value pairs
// They can have primitive data types
// Methods are functions inside the object

// Object Ctor Notation
let person = new Object();

person.firstName = 'John'
person.lastName = 'Smith'
person.son = new Object();

person.son.firstName = 'Nick'
person.son.age = 5

// Object Literal Notation or JSON (JS Object Notation)
let newPerson = {
	firstName: 'John',
	lastName: 'Smith',
	age: 27,
	daughter: {
		firstName: 'Mary',
		age: 5
	},
	myFunc: function(daughterName, fatherName, daughterAge) {
		console.log(daughterName + ' is a the daughter of ' + fatherName + ' and is ' + daughterAge + ' years old')
	},
	objFunc: function(obj) {
		console.log(obj.daughterName + ' is a the daughter of ' + obj.fatherName + ' and is ' + obj.daughterAge
			+ ' years old')
	}
}

console.log(newPerson)
console.log(newPerson.daughter)
newPerson.myFunc(newPerson.daughter.firstName, newPerson.firstName, newPerson.daughter.age)
newPerson.objFunc({
	daughterName: 'Jessie',
	fatherName: 'Michael',
	daughterAge: 5
})
