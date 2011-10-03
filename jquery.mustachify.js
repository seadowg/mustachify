(function( $ ){
  $.fn.mustachify = function() {
    this.find('img').each(function(index) {
      var src = $(this).attr('src');
      $(this).attr('src', 'http://mustachify.me/?src=' + src)
    })

		if (this.get(0).nodeName == "IMG") {
			var src = this.attr('src');
      this.attr('src', 'http://mustachify.me/?src=' + src)
		}
		return this;
  }
})( jQuery );
