const textEl = document.querySelector('.text')

const words = ['Developer', 'Youtuber', 'Blogger'].map(word => word + '.')

let wordIndex = 0
let charIndex = 0

let addingChars = true
let shouldWait = false

let currentWord = words[wordIndex]

const updateCurrWord = () => {
	wordIndex++

	if (wordIndex === words.length) wordIndex = 0

	currentWord = words[wordIndex]
}

const addChar = () => {
	let currChar = currentWord[charIndex]

	const char = document.createElement('span')

	char.innerText = currChar
	char.classList.add('char')

	textEl.appendChild(char)

	charIndex++

	if (charIndex === currentWord.length) {
		charIndex--
		addingChars = false
		shouldWait = true
	}
}

const removeChar = () => {
	const char = textEl.lastElementChild

	textEl.removeChild(char)

	charIndex--

	if (charIndex < 0) {
		charIndex++
		addingChars = true
		updateCurrWord()
	}
}

const runTypewriter = () => {
	const operation = addingChars ? addChar : removeChar

	operation()

	let timeout = addingChars ? 200 : 100

	if (shouldWait) {
		timeout = 1000
		shouldWait = false
	}

	setTimeout(runTypewriter, timeout)
}


setTimeout(runTypewriter, 1500)
