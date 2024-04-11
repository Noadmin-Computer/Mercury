let swiperCards = new Swiper('.card__content', {
	loop: true,
	spaceBetween: 32,
	grabCursor: true,
	slidesPerView: 3,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
})
