// Functions -> used to write code that needs to be repeatedly used

function func(/* parameters */) {
	console.log('Hello, World!')
}
func()

function passExam(name, score) {
	let passUni = 71
	let passColl = 51
	
	if (score >= passUni) {
		console.log(name + 'has enrolled in University with ' + score + 'points')
	}
	else if (score >= passColl) {
		console.log(name + 'has enrolled in College with ' + score + 'points')
	}
	else {
		console.log(name + 'has failed')
	}
}

function calcScore(quiz, essay) {
	return quiz + essay
}

passExam('John', calcScore(40, 30))
passExam('Mary', 65)
passExam('Bob', 50)

// Function Statement
function add(a, b) {
	console.log(a + b)
}
add(5, 10)

// Function Expression -> must be declared before use 
let sum = function(a, b) {
	console.log(a + b)
}

sum(5, 10)