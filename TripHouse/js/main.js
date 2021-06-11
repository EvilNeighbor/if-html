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