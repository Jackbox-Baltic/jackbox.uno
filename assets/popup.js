let popupBg = document.querySelector('.modal');
let popup = document.querySelector('.content');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.actions');

let popupBgee = document.querySelector('.modalee');
let popupee = document.querySelector('.contentee');
let openPopupButtonsee = document.querySelectorAll('.open-popupee');
let closePopupButtonee = document.querySelector('.actions');

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

openPopupButtonsee.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popupBgee.classList.add('active');
		popupee.classList.add('active');
	})
});

closePopupButtonee.addEventListener('click', () => {
	popupBgee.classList.remove('active');
	popupee.classList.remove('active');
});

document.addEventListener('click', (e) => {
	if (e.target === popupBg) {
		popupBg.classList.remove('active');
		popup.classList.remove('active');
	}
});

document.addEventListener('click', (e) => {
	if (e.target === popupBgee) {
		popupBgee.classList.remove('active');
		popupee.classList.remove('active');
	}
});