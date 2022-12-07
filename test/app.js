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

function ladtheme() {
	const toggleTheme = document.querySelector('.toggle-theme')
	let el = document.documentElement
	var x = document.getElementById("tct");
	console.log('Found!')

	toggleTheme.addEventListener('click', () => {
        console.log('It works!')
		if (el.hasAttribute('data-theme')) {
			el.removeAttribute('data-theme')
			x.innerHTML = "ON DARK THEME";
			localStorage.removeItem('theme')
            console.log('The light theme has been turned on!')
		} else {
			el.setAttribute('data-theme', 'dark')
			x.innerHTML = "ON LIGHT THEME";
			localStorage.setItem('theme', 'dark')
            console.log('The dark theme has been turned on!')
		}
	})

	if (localStorage.getItem('theme') !== null) {
		el.setAttribute('data-theme', 'dark')
		x.innerHTML = "ON LIGHT THEME";
	}
}

ladtheme()