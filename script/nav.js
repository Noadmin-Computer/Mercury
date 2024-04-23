document.addEventListener('scroll', () => {
	const header = document.querySelector('.menu')
	const logo_blue = document.querySelector('.logo-blue')
	const logo_white = document.querySelector('.logo-white')
	const menu_list = document.querySelector('.menu-list')

	if (window.scrollY > 0) {
		header.classList.add('scroll')
		logo_blue.classList.add('remove__logo')
		logo_white.classList.remove('remove__logo')
		menu_list.classList.add('white')
	} else {
		header.classList.remove('scroll')
		logo_blue.classList.remove('remove__logo')
		logo_white.classList.add('remove__logo')
		menu_list.classList.remove('white')
	}
})
