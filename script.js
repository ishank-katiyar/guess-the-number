function reset_game() {
	document.querySelector('.guessfield').disabled = false
	document.querySelector('.guessbutton').disabled = false
	document.querySelector('.guessverdict').style.backgroundColor = "white"
	document.querySelector('.guessverdict').textContent = ''
	document.querySelector('.guessfield').value = ''
	guess_count = 10
	document.querySelector('.guessbutton').textContent = "Check Guess : " + String (guess_count)
	history_block.parentNode.removeChild (history_block)
	reset_button.parentNode.removeChild (reset_button)
	secret_number = Math.floor (Math.random() * 100) + 1
	console.log({secret_number})
}

function set_game_over () {
	// alert ("Game Over!!")
	document.querySelector('.guessfield').disabled = true
	document.querySelector('.guessbutton').disabled = true
	document.querySelector('.guessverdict').style.backgroundColor = "lightgreen"
	reset_button = document.createElement ('button')
	reset_button.className = "resetbutton"
	reset_button.textContent = "Start New Game"
	document.querySelector('.body').append(reset_button)
	reset_button.addEventListener('click', reset_game)
}

function check_guess () {
	// alert ("check guess clicked")
	if (guess_count === 10) {
		guess_block = document.querySelector ('.guessblock')
		history_block = document.createElement("div");
		history_block.className = "historyblock"
		history_block.textContent = "Previous Guesses : ";
		guess_block.append(document.createElement('br'))
		guess_block.append (history_block)
	}

	let user_guess = Number(document.querySelector('.guessfield').value)

	if (user_guess === secret_number) {
		document.querySelector('.guessverdict').textContent = "Correct Guess!!!"
		set_game_over()
	}

	history_block.textContent += " " + String(user_guess)

	if (user_guess < secret_number) {
		document.querySelector ('.guessverdict').textContent = "Guess is too low!!"
		document.querySelector('.guessverdict').style.backgroundColor = "red"
	}	

	if (user_guess > secret_number) {
		document.querySelector ('.guessverdict').textContent = "Guess is too high!!"
		document.querySelector('.guessverdict').style.backgroundColor = "red"
	}	

	guess_count -= 1;
	guess_button.textContent = "Check Guess : " + String (guess_count)

	if (guess_count === 0) {
		document.querySelector('.guessverdict').textContent = "Guess Count Over!!"
		set_game_over()
	}

	document.querySelector('.guessfield').value = ''
	document.querySelector('.guessfield').focus()
}

let secret_number = Math.floor (Math.random() * 100) + 1
console.log ({secret_number})

let guess_count = 10

document.querySelector('.guessverdict').style.backgroundColor = "white"
guess_button = document.querySelector ('.guessbutton')
guess_button.textContent = "Check Guess : " + String(guess_count)
guess_button.addEventListener ('click', check_guess)
document.querySelector('.guessfield').value = ''
document.querySelector('.guessfield').focus()
