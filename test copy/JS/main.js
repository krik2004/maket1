new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		bulletElement: 'li',
		clickable: true,
	},

	//   частичное отображение соседнего слайда
	slidesPerView: 2,
	// расстояние между слайдами
	spaceBetween: 10,
	//первый слайд по центру
	//   centeredSlides: true,
	// бесконечность прокрутки слайдов
	loop: true,

	on: {
		resize: function enableOnlyMobile(swiper) {
			// Disable the slider when the window width is less than or equal to 960
			if (320 < window.innerWidth) {
				swiper.disable()
				swiper.el.classList.add('-non-slider')
			} else {
				swiper.enable()
				swiper.el.classList.remove('-non-slider')
			}
		},
	},
})

const btn = document.querySelector('.brands-slider__expand-btn')
const swiperSlide = document.querySelectorAll('.swiper-slide')
// кол-во слайдов
const totalSlides = swiperSlide.length
var allHidden = true

// функция для первых 6 слайдов назначить класс hidden
// let hideover = function () {
// for (let i = 0; i < 6; i++) {
//     swiperSlide[i].classList.add('hidden')
// }
// }
// // hideover();

for (var i = 5; i < totalSlides; i++) {
	// Скрыть карточку товара при запуске страницы
	swiperSlide[i].style.display = 'none'
}

// функция обработчика события для кнопки "Показать больше/скрыть"
function toggleProducts() {
	//  все карточки товаров, начиная с девятой карточки
	for (var i = 5; i < totalSlides; i++) {
		// Проверьте, все ли карточки товаров скрыты
		if (swiperSlide[i].style.display === 'none') {
			// Если скрыты, отобразите их
			swiperSlide[i].style.display = 'block'
			// Измените текст кнопки на "Скрыть"
			this.textContent = 'Скрыть'
			// Установите значение переменной allHidden в false
			allHidden = false
		} else {
			// Если отображены, скройте их
			swiperSlide[i].style.display = 'none'
			// Измените текст кнопки на "Показать больше"
			this.textContent = 'Показать больше'
			// Установите значение переменной allHidden в true
			allHidden = true
		}
	}
}
// btn.addEventListener('click', function () {
// 	console.log('1')
// 	for (let card of swiperSlide) {
// 		card.classList.toggle('hidden')
// 	}
// })
btn.addEventListener('click', toggleProducts)
