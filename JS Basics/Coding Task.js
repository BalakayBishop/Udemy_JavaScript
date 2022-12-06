const johnScore = 85
const nickScore = 80

const lowerPassing = 51

if (johnScore >= lowerPassing && nickScore >= lowerPassing) {
	console.log('Both students passed the test!')
}
else if (johnScore >= lowerPassing && nickScore <= lowerPassing) {
	console.log('John passed with a ' + johnScore + ', but Nick failed')
}
else if (johnScore <= lowerPassing && nickScore >= lowerPassing) {
	console.log('John failed, but Nick passed with a ' + nickScore)
}
else {
	console.log('Both students failed the test!')
}