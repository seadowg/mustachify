(function( $ ){
  $.fn.mustachify = function() {
    $('img').each(function(index) {
      var src = $(this).attr('src');
      $(this).attr('src', 'http://mustachify.me/?src=' + src)
    })
	}
})( jQuery );
