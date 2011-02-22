(function ($) {
	var last_event = {event: null, which: null};
	var enter_keycode = 13;
	
	$.fn.smartenter = function(func) {
		this.each(function() {
			if (typeof(func)=='undefined')
				$(this).trigger('smartenter');
			$(this).bind('smartenter',func);
			
			$(this).keyup(function(ev) {
				if (last_event.event=='keypress' && last_event.which==enter_keycode && ev.which==enter_keycode) {
					$(this).trigger('smartenter');
				}
				
				last_event.event = 'keyup';
				last_event.which = ev.which;
			});

			$(this).keypress(function(ev) {
				last_event.event = 'keypress';
				last_event.which = ev.which;
			});
		});
		
		return this;
	};
})(jQuery);

