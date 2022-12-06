// Coding Task for Intermediate JS

function passFail(obj, arrGrade, arrScore) {
	let totalScore = obj.scoreOne + obj.scoreTwo
	let result
	for (let i = 0; i < arrScore.length; i++) {
		if (totalScore >= arrScore[i]) {
			result = obj.name + ' scored a ' + totalScore + ' and received a ' + arrGrade[i]
			break
		}
		else {
			result = obj.name + ' scored a ' + totalScore + ' and received a ' + arrGrade[4]
		}
	}
	return result
}

let arr = [
	{name: 'John', scoreOne: 47, scoreTwo: 46},
	{name: 'Bob', scoreOne: 23, scoreTwo: 24},
	{name: 'Nick', scoreOne: 40, scoreTwo: 35},
	{name: 'Alex', scoreOne: 44, scoreTwo: 45}
]
let grade = ['A', 'B', 'C', 'D', 'F']
let score = [91, 81, 71, 61, 51]

for (let i = 0; i < arr.length; i++) {
	console.log(passFail(arr[i], grade, score))
}