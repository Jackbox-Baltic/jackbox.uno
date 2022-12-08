function  siteversion() {
	var element = document.getElementById("sv");
	element.innerHTML = "Site: 221208-3";
}

function ladtheme() {
	const toggleTheme = document.querySelector('.toggle-theme')
	console.log('Found!')
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
siteversion()