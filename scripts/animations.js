// Simple FA animations when the user clicks on the buttons
const $card = document.querySelector('.card');
const $dislikeBtn = $card.querySelector('.dislike-btn');
const $adoptBtn = $card.querySelector('.adopt-btn');
const $likeBtn = $card.querySelector('.like-btn');

const animations = () => {
	$dislikeBtn.addEventListener('click', () => {
		const $dislikeIcon = $dislikeBtn.querySelector('.btn-icon');
		$dislikeIcon.classList.add('fa-shake');
		setTimeout(() => {
			$dislikeIcon.classList.remove('fa-shake');
		}, 750);
	});

	$adoptBtn.addEventListener('click', () => {
		party.sparkles($adoptBtn, {
			count: party.variation.range(20, 100),
		});
	});

	$likeBtn.addEventListener('click', () => {
		const $likeIcon = $likeBtn.querySelector('.btn-icon');
		$likeIcon.classList.add('fa-beat');
		setTimeout(() => {
			$likeIcon.classList.remove('fa-beat');
		}, 750);
	});
}

export { animations };