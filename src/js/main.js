$(function(){

  $(".footer__right").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
  
	$('.menu-btn').click(function(){
		$(".modal__menu").fadeIn();
	})

	$('.menu__close').click(function(){
		$(".modal__menu").fadeOut();
	})

$('.skip-btn').click(function(){
    $('.intro').fadeOut();
})



});

