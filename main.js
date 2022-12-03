$(document).ready(() => {
	$('#hamburger-menu').click(() => {
		$('#hamburger-menu').toggleClass('active')
		$('#nav-menu').toggleClass('active')
	})

	let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
	$('#hero-carousel').owlCarousel({
		items: 1,
		dots: false,
		loop: true, 
		nav: true, 
		navText: navText,
		autoplay: false,
		autoplayhoverPause: false
	})

	$('#top-movies-slide').owlCarousel({
		items: 6,
		dots: false,
		loop: true,
		autoplay:true, 
		autoplayhoverPause: true,
		resposive: {
			500: {
				items: 3
			},
			1280:{
				items: 4
			},
			1600:{
				items: 6
			}
		}
	})

	$('.movies-slide').owlCarousel({
		items: 6,
		dots: false,
		loop: true,
		autoplay:true,
		nav: true, 
		navText: navText,
		margin: 15,
		resposive: {
			500: {
				items: 2
			},
			1280:{
				items: 4
			},
			1600:{
				items: 6
			}
		}
	})
})