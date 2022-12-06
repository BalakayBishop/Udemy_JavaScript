// Arrays -> a type of list
// Array literal
let arr = [
	'John',
	'Bob',
	'Mary',
	10,
	true,
	[1, 2, 3],
	function(name) {
	return 'Hello ' + name
}];
console.log(arr) // will print the entire array
console.log(arr[0]) // will print index item at pos 0 in the array
console.log(arr[5][1]) // this will get the second item from the nested array in the array

console.log(arr[6](arr[0])) // this wil l print Hello John because the array index is used as the arg for the function

// Array Ctor
let arr2 = new Array('john')

// Array Methods (Functions)
let colors = ['white', 'black', 'red']
colors[1] = 'green' // this will change the index 1 from black to green

// Adding items -> push
colors.push('blue')

// Remove items -> pop
colors.pop() // removes the last item in the array

// Remove at the beginning
colors.shift()

// Add item to the beginning
colors.unshift('purple')

// finds the index of the first match
colors.indexOf('red')

colors.indexOf('Brown') // returns -1 for not found

// test if blue is found, if not then it is added to the end 
if (colors.indexOf('blue') === -1) {
	colors.push('blue')
	console.log(colors)
}