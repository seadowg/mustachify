(function( $ ){
  $.fn.mustachify = function() {
		var stuff = this.find('img');
		if (stuff.length > 0) {
			for (i = 0; i < stuff.length; i++) {
				path = "http://mustachify.me/?src=" + stuff.get(i).src;
				stuff.get(i).src = path;
			}
		}
		else if (this.get(0).nodeName == "IMG") {
			path = "http://mustachify.me/?src=" + this.get(0).src;
			this.get(0).src = path;
		}
		return this;
	}
})( jQuery );