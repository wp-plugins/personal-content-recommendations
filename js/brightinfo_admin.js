jQuery(function(){
	jQuery('#bi_acquire_script').submit(function(){
		if( !jQuery(this).find('input[name=TermsOfUse]').is( ':checked' ) )
		{
			alert( "Please accept Terms of Use" );
		}
		else if( jQuery(this).find('input[name=Password]').val().length < 6 )
		{
			alert( "Please use longer password" );
		}
		else
		{
			jQuery('#bi_acquire_script input[type=submit]').attr('disabled', 'disabled');
			jQuery('#loader').show();
		
			jQuery.getJSON('http://manage.brightinfo.com/registration/RegistrationWS?' + jQuery(this).serialize() + '&callback=?').done( function( res ) {
				jQuery('#bi_acquire_script input[type=submit]').removeAttr('disabled');
				jQuery('#loader').hide();

			
				if( res.match( /script/ ) == null )
					alert( res );
				else
				{
					//jQuery('#enable').prop( 'checked', true );
					jQuery('#script').val( res ).parents('form').first().submit();
				}
			});
		}
		
		return false;	
	});
	
	jQuery('#bi_reset_settings').click(function(){
		//jQuery('#enable').prop( 'checked', true );
		jQuery('#script').val('').parents('form').first().submit();		
	});
});

