$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.move_top').fadeIn();
    } else {
        $('.move_top').fadeOut();
    }
});

$( '.move_top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
});