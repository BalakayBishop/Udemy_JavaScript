// ---------------------------------------------------------------------------------------------
// Part One -> adding a new note
let addButton = document.getElementById('add-btn')
let formInput = document.getElementById('add-input')

// my solution
addButton.addEventListener('click', function(e) {
	// prevents page reloading
	e.preventDefault()

	// gets the text input
	let noteName = formInput.value

	// data validation
	if (noteName.length !== 0) {

		// creating new elements for the list-item
		let newLi = document.createElement('li')

		let newTitle = document.createElement('p')
		newTitle.innerText = noteName
		newLi.appendChild(newTitle)

		let newIcons = document.createElement('p')
		newIcons.innerHTML = "<i class=\"fa fa-pencil-square-o\"></i><i class=\"fa fa-times\"></i>"
		newLi.appendChild(newIcons)

		let newInput = document.createElement('input')
		newInput.setAttribute('type', 'text')
		newInput.className = 'edit-note'
		newLi.appendChild(newInput)

		// adding the li to the ul
		let ul = document.querySelector('ul')
		ul.appendChild(newLi)

		// clearing the input field in the form
		let input = document.getElementById('add-input')
		input.value = ''
	}

});

// given solution
let ul = document.querySelector('ul')
//
// document.getElementById('add-btn').addEventListener('click', function() {
// 	e.preventDefault()
// 	let addInput = document.getElementById('add-input')
// 	if (addInput.value !== '') {
// 		let li = document.createElement('li'),
// 			firstPar = document.createElement('p'),
// 			secondPar = document.createElement('p'),
// 			firstIcon = document.createElement('i'),
// 			secondIcon = document.createElement('i'),
// 			input = document.createElement('input')
//
// 		firstIcon.className = "fa fa-pencil-square-o"
// 		secondIcon.className = "fa fa-times"
// 		input.className = "edit-note"
// 		input.setAttribute('type', 'text')
//
// 		firstPar.textContent = addInput.value
//
// 		secondPar.appendChild(firstIcon)
// 		secondPar.appendChild(secondIcon)
//
// 		li.appendChild(firstPar)
// 		li.appendChild(secondPar)
// 		li.appendChild(input)
//
// 		ul.appendChild(li)
// 		addInput.value = ''
// 	}
//
// })

// ---------------------------------------------------------------------------------------------
// Part 2 -> Edit and Deleting the note

ul.addEventListener('click', function(e) {
	if(e.target.classList[1] === 'fa-pencil-square-o') {
		// hiding the icons
		let parentPar = e.target.parentNode
		parentPar.style.display = 'none'
		
		let note = parentPar.previousElementSibling
		let input = parentPar.nextElementSibling
		
		input.style.display = 'block'
		input.value = note.textContent
		
		input.addEventListener('keypress', function(e) {
			if(e.keyCode === 13) {
				if(input.value !== '') {
					note.textContent = input.value
					parentPar.style.display = 'block'
					input.style.display = 'none'
				}
				else {
					parentPar.style.display = 'block'
					input.style.display = 'none'
				}
			}
		})
	}
	else if (e.target.classList[1] === 'fa-times') {
		let list = e.target.parentNode.parentNode
		list.parentNode.removeChild(list)
	}
	
})

// ---------------------------------------------------------------------------------------------
// Part 3 -> Hiding Notes

let hideItem = document.getElementById('hide')
hideItem.addEventListener('click', function() {
	let label = document.querySelector('label')
	if(hideItem.checked) {
		label.textContent = 'Show notes'
		ul.style.display = 'none'
	}
	else {
		label.textContent = 'Hide notes'
		ul.style.display = 'block'
	}
})

// ---------------------------------------------------------------------------------------------
// Part 4 -> Search Filter

let searchInput = document.querySelector('#search-note input')

searchInput.addEventListener('keyup', function(e) {
	let searchChar = e.target.value.toUpperCase()
	let notes = ul.getElementsByTagName('li')
	
	Array.from(notes).forEach(function(note) {
		let parText = note.firstElementChild.textContent
		if (parText.toUpperCase().indexOf(searchChar) !== -1) {
			note.style.display = 'block'
		}
		else {
			note.style.display = 'none'
		}
	})
})
























