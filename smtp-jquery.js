(function ( $ ) {
 
	$.getScript( "https://smtpjs.com/v2/smtp.js", function( data, textStatus, jqxhr ) {
		$.fn.Email = Email;	
	});

    $.fn.Email = function() {
        return "Not Loaded yet";
    };
 
}( jQuery ));


