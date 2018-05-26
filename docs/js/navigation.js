// Мобильная навигация

var toggle = $("#navigation__button");

	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fas');
	var navBlock = $('.navigation__menu');
	var navBlockOpen = 'navigation__menu--open';
	var navLink = $('.navigation__menu a');


	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
			if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	})

	navLink.on('click', function(){
			if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
		navBlock.removeClass(navBlockOpen);
	})