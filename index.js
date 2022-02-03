const text = document.querySelector('.text')

const words = ['Developer', 'Youtuber', 'Blogger'].map(word => word + '.')

let charIndex = 0
let wordIndex = 0

let addingChars = true
let shouldWait = false

let currentWord = words[0]

const updateCurrentWord = () => {
	wordIndex++

	if (wordIndex === words.length) wordIndex = 0

	currentWord = words[wordIndex]
}

const addChar = () => {
	let currChar = currentWord[charIndex]
	const wordLength = currentWord.length

	const char = document.createElement('span')

	char.innerText = currChar
	char.classList.add('char')

	text.appendChild(char)

	charIndex++

	if (charIndex === wordLength) {
		charIndex--
		addingChars = false
		shouldWait = true
	}
}

const removeChar = () => {
	const char = text.lastElementChild

	text.removeChild(char)
	charIndex--

	if (charIndex < 0) {
		charIndex++
		addingChars = true
		updateCurrentWord()
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
