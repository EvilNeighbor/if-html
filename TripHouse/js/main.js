(function($) {
$(function() {
  
  $('ul.tabs__items').on('click', 'li:not(.tabs__item-active)', function() {
    $(this)
      .addClass('tabs__item-active')
			.siblings()
			.removeClass('tabs__item-active')
      .closest('div.container')
			.find('div.tabs__content')
			.removeClass('tabs__content-active')
			.eq($(this).index()).addClass('tabs__content-active');
  });
  
});
})(jQuery);

$(document).ready(function(){
  $('.slick__wrapper').slick({
		slidesToShow: 4 ,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		 responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }   
  ]
   
  });
});

$(document).ready(function(){
  $('.slick-wrapper').slick({
		slidesToShow: 3 ,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		 responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
       
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				arrows: false,
				dots: true,
      }
    }   
  ]
   
  });
});
