document.addEventListener('scroll', () => {
	const header = document.querySelector('.menu')
	const menu_list = document.querySelector('.menu-list')

	if (window.scrollY > 0) {
		header.classList.add('scroll')
		menu_list.classList.add('white')
	} else {
		header.classList.remove('scroll')
		menu_list.classList.remove('white')
	}
})
