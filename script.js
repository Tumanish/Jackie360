let Options = {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		// nextEl: '.swiper-button-next',
		nextEl: '.swiper-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 2,
	spaceBetween: 40,

};

new Swiper('.swiper', Options);




function starClick(element) {
	let empty = document.getElementById("section-main-video__star--img1");
	let full = document.getElementById("section-main-video__star--img2");

	if (empty.classList.contains("main-video__star--hide")) {
		empty.classList.remove("main-video__star--hide");
		full.classList.add("main-video__star--hide");
	} else {
		empty.classList.add("main-video__star--hide");
		full.classList.remove("main-video__star--hide");
	}

}