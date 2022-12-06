// Loops
let arr = ['John', 'Nick', 'Bob', 'Michael', 'Mary']

// FOR LOOP
for(let i = 0; i < arr.length; i++) {
	console.log(arr[i])
	
	if(arr[i] === 'Bob') {
		console.log(arr[i] + ' is my brother')
		break // or continue
	}
}

// WHILE LOOP
let i = 0
while (i < 10) {
	console.log(i)
	i++
}

// DO-WHILE LOOP
let j = 0
do {
	console.log(j)
	j++
} while (j < 10)
