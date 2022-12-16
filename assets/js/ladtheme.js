function ladtheme() {
	const toggleTheme = document.querySelector('.toggle-theme')
	console.log('Found!')
	let el = document.documentElement
	var x = document.getElementById("tct");
	console.log('Found!')

	toggleTheme.addEventListener('click', () => {
        console.log('It works!');
		if (el.hasAttribute('data-theme')) {
			el.removeAttribute('data-theme');
			console.log('The light theme has been turned on!');
			//x.classList.remove("lang-toggleladoff");
			//x.classList.add("lang-toggleladon");
			x.innerHTML = '🌛';
			console.log('🌞');
			localStorage.removeItem('theme');
            console.log('Item removed from local storage');
		} else {
			el.setAttribute('data-theme', 'dark');
			console.log('The dark theme has been turned on!');
			//x.classList.remove("lang-toggleladon");
			//x.classList.add("lang-toggleladoff");
			x.innerHTML = '🌞';
			console.log('🌛');
			localStorage.setItem('theme', 'dark');
			console.log('Item added in local storage');
		}
	})

	if (localStorage.getItem('theme') !== null) {
		el.setAttribute('data-theme', 'dark');
		//x.classList.add("lang-toggleladoff");
		x.innerHTML = '🌞';
	} else {
		//x.classList.add("lang-toggleladon");
		x.innerHTML = '🌛';
	}
}

ladtheme()