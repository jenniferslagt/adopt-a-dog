const $dropdown = document.querySelector('.dropdown');
const $card = document.querySelector('.card');

// NOTE: THIS IS THE MODERN APPROACH OF WORKING WITH PROMISES
const fetchAndRenderData = async () => {
	const endpoint = 'https://dog.ceo/api/breeds/list/all';
	// The try block is executed first
	try {
		// await is waiting for the promise to be resolved and will execute the next code if the promise is resolved or returned
		const response = await fetch(endpoint);
		const data = await response.json();
		createBreedList(data.message);
	} catch (e) {
		// The catch block will run if the fetch (or try block) is failed
		// You need to use (e) for the older browsers. This is the error parameter which contains info about the exact error
		console.log('There was a problem fetching the breed list.');
		console.log('Error:', e)
	}
} 

const createBreedList = (breedList) => {
	const $dropdownSelect = $dropdown.querySelector('.dropdown-select');
	// Object.keys() is returning an array based on objects' property names
	const breedArray = Object.keys(breedList);

	// .map() method you can map each array item into something else
	// join('') returns an array into one single string of text, and undoes any seperation between the array items by adding nothing between the ''
	$dropdownSelect.innerHTML = `
	<option class="breed">Choose your favorite breed</option>
		${breedArray.map(breed => {
			return `<option class="breed">${breed}</option>`
		}).join('')}
	`

	$dropdownSelect.addEventListener('change', () => {
		if ($dropdownSelect.value == 'Choose your favorite breed') {
			$card.classList.add('is-hidden');
		} else {
			$card.classList.remove('is-hidden');
			loadByBreed($dropdownSelect.value);
		}
	});
}

const loadByBreed = async (selectedBreed) => {
	const $breedOptions = $dropdown.querySelectorAll('.breed');

	if (selectedBreed != $breedOptions[0].value) {
		const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
		const data = await response.json();
		changeImage(data.message);
	}
}

const changeImage = (images) => {
	const $cardImage = $card.querySelector('.js-card-img');

	$cardImage.innerHTML = `
	<img src="${images[0]}" class="card-img" alt="Image of dog">
	`

	const $changeCardBtns = $card.querySelectorAll('.js-change-card');
	$changeCardBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const random = Math.floor(Math.random() * images.length);
			$cardImage.innerHTML = `
			<img src="${images[random]}" class="card-img" alt="Image of dog">
			`
		});
	});
}

// Note: you can only use default export to export one thing in a file
// Use curly brackets for standard exports and imports, not for default exports
export { fetchAndRenderData };


// // NOTE: THIS IS THE OLD WAY OF WORKING WITH PROMISES
// // Fetch is getting the data and always returns a promise
// fetch('https://dog.ceo/api/breeds/list/all')
// 	// .then method to handle the promise if succeeded
// 	.then(response => {
// 		// parse the response as json, but response is still returning a promise
// 		return response.json();
// 	})
// 	// then handles the promise again if it's succeeded
// 	.then(data => {
// 		console.log(data)
// 	})