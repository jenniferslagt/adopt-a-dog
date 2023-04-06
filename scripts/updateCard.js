import femaleNames from './femaleNames.json' assert { type: 'json' };
import maleNames from './maleNames.json' assert { type: 'json' };

const $card = document.querySelector('.card');

const changeGender = () => {
	let gender = 'female';
	randomBoolean();
	// If boolean is true, then gender is male
	if (randomBoolean()) {
		gender = 'male';
	} else {
		gender = 'female';
	}
	changeIconAndName(gender);
}

const changeIconAndName = (gender) => {
	const $genderIcon = $card.querySelector('.card-title .gender-icon');
	const $dogName = $card.querySelector('.card-title .dog-name');
	if (gender == 'male') {
		$genderIcon.classList.replace('fa-venus', 'fa-mars');
		const random = Math.floor(Math.random() * maleNames.length);
		$dogName.innerText = maleNames[random];
	} else if (gender == 'female') {
		$genderIcon.classList.replace('fa-mars', 'fa-venus');
		const random = Math.floor(Math.random() * femaleNames.length);
		$dogName.innerText = femaleNames[random];
	}
}

const generateAge = () => {
	const $ageTag = $card.querySelector('.tag-age .tag-text');
	const randomAge = Math.floor(Math.random() * (10 - 0) + 0); // Generate between 0 and 10
	if (randomAge <= 1) {
		$ageTag.innerText = randomAge + ' year';
	} else {
		$ageTag.innerText = randomAge + ' years';
	}
}

const generateDistance = () => {
	const $locationTag = $card.querySelector('.tag-location .tag-text');
	const randomNumber = Math.floor(Math.random() * (200 - 1) + 1); // Generate between 1 and 200
	if (randomNumber <= 1) {
		$locationTag.innerText = randomNumber + ' km away';
	} else {
		$locationTag.innerText = randomNumber + ' km away';
	}
}

const generateVacState = () => {
	const $vaccinationTag = $card.querySelector('.tag-vaccination .tag-text');
	if (randomBoolean()) {
		$vaccinationTag.innerText = 'Vaccinated';
	} else {
		$vaccinationTag.innerText = 'Unvaccinated';
	}
}

const randomBoolean = () => {
	return Math.random() < 0.5;
}

const updateCardContent = () => {
	const $dropdown = document.querySelector('.dropdown');
	const $dropdownSelect = $dropdown.querySelector('.dropdown-select');
	$dropdownSelect.addEventListener('change', () => {
		changeGender();
		generateAge();
		generateDistance();
		generateVacState();
	});
}

export { updateCardContent };