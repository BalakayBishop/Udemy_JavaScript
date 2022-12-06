let Child = 'Alexis'
let gender = 'male'

if (gender === 'male') {
	console.log(Child + ' is my son')
}
else {
	console.log(Child + ' is my daughter')
}

// Using IF, ELSE IF, and ELSE statements
let prof = 'instructor'

if (prof === 'instructor') {
	console.log( prof + 'teaches students')
}
else if (prof === 'doctor') {
	console.log(prof + 'treats people')
}
else if (prof === 'composer') {
	console.log(prof + 'creates music')
}
else {
	console.log('Profession does not match')
}

// Logical Operators
// AND -> both must be TRUE
if (5 === 5 && 4 === 4) {
	console.log('Condition TRUE')
}
else {
	console.log('Condition FALSE')
}

// OR -> only one must be TRUE
if (5 === 5 || 4 === 4) {
	console.log('Condition TRUE')
}
else {
	console.log('Condition FALSE')
}

// NOT will give us the inverse
if (!true) {
	console.log('FALSE')
}
else {
	console.log('TRUE')
}