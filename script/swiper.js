let swiper1 = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		520: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
})

let swiper2 = new Swiper('.mySwiper', {
	slidesPerView: 4,
	spaceBetween: 20,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		520: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
})
