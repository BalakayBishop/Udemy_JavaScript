/*
	Intro to DOM
	- a cross-platform and language-independent model for representing and interacting with HTML
	- Document represented as a family tree
*/
// -----------------------------------------------------------------------------------------------------------
/*
	getElementById('id')
	- returns the element that has the ID attribute with the specified value from the document (DOM)
	-> document.getElementById()
	-> everything in the DOM is considered an object
	-> with the typeof command for any element from the DOM it will return 'object'
	-> the document.getElementById() will return the first object found the specific id
	-> if we try to use the getElementByID where the id does not exist will return 'null'
*/

let example1 = document.getElementById('list') // this will get the ul with id 'list'

// -----------------------------------------------------------------------------------------------------------

/*
	.textContent
	- this property sets of returns the textual content of the specified node, and all its descendants
	- we can then set a value that we want for the textContent
	- example2.textContent = 'Hello' -> this will remove the First, Second, Third and replace it with Hello
*/
let example2 = document.getElementById('list')
example2.textContent // for this it will return the First Note, Second Note, and Third Note

let example3 = document.getElementById('heading').textContent

// -----------------------------------------------------------------------------------------------------------

/*
	.innerHTML
	- returns the html properties as a string
*/
let example4 = document.getElementById('list')
example4.innerHTML // this will return the entire ul

// -----------------------------------------------------------------------------------------------------------
/*
	querySelector('selector')
	- returns the first element that matches a specified CSS selector in the document
	- must follow CSS syntax
*/
// this will get the first ul
let example5 = document.querySelector('ul')

// this will get the whole form
let example6 = document.querySelector('#search-note')

// this will get the second li element and all its children
let example7 = document.querySelector('ul li:nth-child(2)')

// this selects the delete icon from the 2nd li in the ul
example7.querySelector('p .fa-times')

// -----------------------------------------------------------------------------------------------------------
/*
	getElementByClassName('class')
	- this returns a collection of all elements in the document that share the specified class name in an array
	 	type list (not an actual array)
*/
// this selects all the elements with the class fa inside an HTML collection
let example8 = document.getElementsByClassName('fa')

// we can access the elements in the collection with array notation
console.log(example8[0])

// we can also use this collection in JS loops
for (let i = 0; i < example8.length; i++) {
	console.log(example8[i])
}

// we cannot use JS array methods for this HTML collection
example8.push('Hello') // -> results in an error

// we can use Array.from to export the HTML collection to a JS array
let example9 = Array.from(example8)

console.log(example8) // HTML Collection
console.log(example9) // Array

// -----------------------------------------------------------------------------------------------------------
/*
	using forEach
*/

// this results in an error because it does not work with HTML collection
/* example8.forEach(function(icon, index, arr) {
 	console.log(icon, index, arr)
}) */

// this will then print the element, its index, and a collection of what it contains
example9.forEach(function(icon, index, arr) {
	console.log(icon, index, arr)
})

/*
	getElementByTagName('tag')
	- returns a collection of all elements in the document with the specified tag name
	- returns another HTML collection
*/

let example10 = document.getElementsByTagName('li')

console.log(example10)

// -----------------------------------------------------------------------------------------------------------
/*
	querySelectorAll
	- returns all elements in the document that matches the specified selector
	-returns a node list
	- some array functions will work for node lists, but not all
		- .forEach will work, but .push() will not
	- we can choose multiple elements by listing them in the SelectorAll separated by commas
	- it will select from top -> down in the document, therefore h2 will come before the li in the list
*/

let example11 = document.querySelectorAll('li')

example11.forEach(function(li) {
	console.log(li)
})

// -----------------------------------------------------------------------------------------------------------
/*
	DOM Styles
	- JS allows us to use DOM controls to style the DOM dynamically
	- using the .style will dynamically create inline styling
	- if there are two or more words then we need to us camel case
	- we can use the array index notation to get one item by index to style
	- we can use loops to style all items from the collection
	
	- we can use CSS text property
	- using CSS will remove all inline properties
*/

// selecting the header/h2
let example12 = document.querySelector('header h2')

example12.style.color = 'red'
example12.style.backgroundColor = '#333333'

let example13 = document.querySelectorAll('ul li')

example13[1].style.backgroundColor = 'red'

for (let i = 0; i < example13.length; i ++) {
	example13[i].style.backgroundColor = 'blue'
}

example13[1].style.cssText = 'background-color: yellow; font-size: 24px;'

// -----------------------------------------------------------------------------------------------------------
/*
	DOM Styles and Classes
	- className -> gets and sets the value of class attribute
	- we can set styles in our CSS file to use with .className to change dynamically without more typing
	- we can also use classList to specify a list of classes
*/

example14 = document.querySelector('header h2')

example14.className = 'changeBg' // this changes background

example14.className = 'changeFt' // this changes the font, but removes the background

example14 += 'changeBg' // this will allow for two class names

example15 = document.querySelector('header h2')

// Specifying the list of classes will also have the same effect of className assignment
example15.classList.add('changeBg')
example15.classList.add('changeFt')

// -----------------------------------------------------------------------------------------------------------
/*
	Events
	- Actions that happen on a web page
	-
*/
let example16 = document.querySelector('h2')

function a() {
	console.log('Clicked')
}

function b() {
	console.log('Mouse Over')
}

/*
	Add Event Listener
	- addEventListener()
	- attaches an even handler to the specified handler
	- can use multiple at one time
	- multiple listeners will execute
	
	Event Object
	- when an event occurs, the even object is created
	-
*/

example16.addEventListener('click', function() {
	console.log('Clicked')
})

// OR

function c(e) {
	console.log(e)
}
function d() {
	console.log('Clicked')
}

example16.addEventListener('click', c)
example16.addEventListener('click', d)

// Passing Arguments through the Event Listener
let example17 = document.querySelector('h2')

example17.addEventListener('click', function() {
	f(5, 10)
})

function f(x, y) {
	console.log(x * y)
}

/*
	Event Flow
	- in this example, with the h2, header, and div event listeners
	- if we click on the h2, the events will go from h2 -> header -> div
	- Event bubbling vs. event capturing
*/

let div = document.querySelector('div.wrapper')
let header = document.querySelector('header')
let h2 = document.querySelector('header h2')

div.addEventListener('click', function() {
	console.log('from div')
})

header.addEventListener('click', function() {
	console.log('from header')
})

h2.addEventListener('click', function() {
	console.log('from h2')
})

// -----------------------------------------------------------------------------------------------------------
/*
	getAttribute
	- returns the value of the attribute with the specified name of the element
	- returns a string
	
	setAttribute
	- sets the value of an attribute on the specified element
	
	hasAttribute
	- returns boolean if the element has a specified attribute
*/

let example19 = document.querySelector('div.wrapper')

example19.getAttribute('class')

let example20 = document.querySelector('div.wrapper')

example20.setAttribute('style', 'background: coral')

// -----------------------------------------------------------------------------------------------------------
/*
	- Manipulating elements to change their type and value
*/
let button = document.getElementById('add-btn')
let input = document.getElementById('add-input')

button.addEventListener('click', function(e) {
	e.preventDefault()
	input.setAttribute('type', 'submit')
	input.setAttribute('value', input.value)
})

// -----------------------------------------------------------------------------------------------------------
/*
	DOM Navigation
	-
*/

let example21 = document.getElementById('list-item')

let parent = example21.parentNode // this will give us the ul element

parent.style.backgroundColor = 'orange' // this will change the ul background color

example21.childNodes // this will result in a Node List, including whitespace
example21.children // this will result in an HTML collection without whitespace
example21.firstChild

// -----------------------------------------------------------------------------------------------------------
// Creating Elements

let newElement = document.createElement('button')
let newText = document.createElement('Click')
newElement.appendChild(newText)
newElement.setAttribute('style', 'display: block; margin: 10px auto; padding: 5px 10px;' +
	'background: coral; color: #ffffff;')

let form = document.getElementById('add')
form.appendChild(newElement) // the new button will be added to the form element and is now visible

// form.insertBefore(newElement, form.children[0]) -> this indicates the newElement will be placed before the first
// element in the form

newElement.parentElement.removeChild(newElement) // removing the newElement from the form
