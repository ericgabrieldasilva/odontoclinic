$(function(){
	var name = $('div.input-single input[name="name"]');
	var email = $('div.input-single input[name="email"]');
	var message = $('div.input-single textarea[name="message"]');
	var timeout;

	$('form.form').submit(function(e){
		e.preventDefault();
		if (name.val() == ""){
			invalidField('div.input-single input[name="name"]', '<i class="fa fa-times"></i> Empty fields are not allowed', false);
		} else if (checkEmail(email.val()) == false){
			invalidField('div.input-single input[name="email"]', '<i class="fa fa-times"></i> Empty fields are not allowed', false);
		} else if (message.val() == ""){
			invalidField('div.input-single textarea[name="message"]', '<i class="fa fa-times"></i> Empty fields are not allowed', false);
		} else{
			name.val('');
			email.val('');
			message.val('');
			invalidField('', '<i class="fa fa-check"></i> Message sent successfully', true);
		}

	});

	$('div.input-single input, div.input-single textarea').focus(function(){
		resetInvalidField($(this));
	});

	function checkEmail(email){
		if (email == '') return false;

		if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
			return false;
		}
	}

	function invalidField(field, message, state){
		clearTimeout(timeout);
		if (state == false){
			$(field).css('border-color', '#ff5c60');
			$('div.box-feedback').html(message).css('background-color', '#eb3b5a').fadeIn();
			timeout = setTimeout(function(){
				$('div.box-feedback').fadeOut();
			}, 5000);
		}else{
			$(field).css('border-color', '#ff5c60');
			$('div.box-feedback').html(message).css('background-color', '#04A65A').fadeIn();
			timeout = setTimeout(function(){
				$('div.box-feedback').fadeOut();
			}, 5000);
		}
		
	}

	function resetInvalidField(el){
		el.css('border-color', '#D2D4D7');
	}

});