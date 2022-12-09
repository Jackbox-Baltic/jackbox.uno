let popupBg = document.querySelector('.modal');
let popup = document.querySelector('.content');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.actions');

openPopupButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popupBg.classList.add('active');
		popup.classList.add('active');
	})
});

closePopupButton.addEventListener('click', () => {
	popupBg.classList.remove('active');
	popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
	if (e.target === popupBg) {
		popupBg.classList.remove('active');
		popup.classList.remove('active');
	}
});