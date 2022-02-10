// Чтобы данный скрипт срабатывал корректно, у кнопки по клику
// на которую открывается блок навигации должен быть id navBtn, 
// у блока навигации должен быть id mainNav и дополнительный класс nav-hidden

// на экранах разрешением меньше 900 пикс у класса nav-hidden
// должно быть свойство height: 0; 
// на экранах разрешением меньше 900 пикс блок навигации 
// должен размещаться абсолютом и у него должно быть свойство z-index

// для того чтобы блок навигации раскрывался и скрывался плавно, у него 
// должно быть свойство transition: height 2s;


function navToggle() {

	let navBtn = document.getElementById('navBtn');
	let mainNav = document.getElementById('mainNav');
	let btnColor = document.getElementsByClassName('btn-color');

	navBtn.onclick = function () {
		let heightNav = mainNav.firstElementChild.offsetHeight;
		if (mainNav.classList.contains('nav-hidden')) {
			mainNav.classList.remove('nav-hidden');
			mainNav.style.height = heightNav + 'px';
		} else {
			mainNav.classList.add('nav-hidden');
			mainNav.style.height = 0;
		}
	}
	window.addEventListener("resize", resizeHandler, false);

	function resizeHandler() {
		let heightNav = mainNav.firstElementChild.offsetHeight;
		if (document.documentElement.clientWidth >= 500) {
			mainNav.style.height = 'auto';
		} else {
			if (mainNav.classList.contains('nav-hidden')) {
				mainNav.style.height = 0;
			} else {
				mainNav.style.height = heightNav + 'px';
			}
		}
	}
	// navBtn.onclick = function () {
	// 	let displayNav = mainNav.firstElementChild.offsetHeight;
	// 	if (mainNav.classList.contains('nav-hidden')) {
	// 		mainNav.classList.remove('nav-hidden');
	// 		mainNav.style.display = displayNav + 'block';
	// 	} else {
	// 		mainNav.classList.add('nav-hidden');
	// 		mainNav.style.display = 'none';
	// 	}
	// }
	// btnColor.onclick = function () {
	// 	let colorNav = mainNav.firstElementChild.offsetColor;
	// 	if (btnColor.style.color = colorNav + 'rgb(121, 121, 121)') {
	// 		btnColor.style.color = colorNav + '#2bb7b5';
	// 	} 
	// }
}

navToggle();

function filterToggle() {

	let filterBtn = document.getElementById('filterBtn');
	let filterBlock = document.getElementById('filterBlock');

	filterBtn.onclick = function () {
		let heightBlock = filterBlock.firstElementChild.offsetHeight;
		console.log(filterBlock)
		console.log(heightBlock)
		if (filterBlock.classList.contains('filter-hidden')) {
			filterBlock.classList.remove('filter-hidden');
			filterBlock.style.height = heightBlock + 'px';
		} else {
			filterBlock.classList.add('filter-hidden');
			filterBlock.style.height = 0;
		}
	}
	window.addEventListener("resize", resizeHandler, false);

	function resizeHandler() {
		let heightNav = filterBlock.firstElementChild.offsetHeight;
		if (document.documentElement.clientWidth >= 500) {
			filterBlock.style.height = 'auto';
		} else {
			if (filterBlock.classList.contains('filter-hidden')) {
				filterBlock.style.height = 0;
			} else {
				filterBlock.style.height = heightNav + 'px';
			}
		}
	}

}
filterToggle();