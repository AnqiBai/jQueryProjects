var main = function(){
  $('.dropdown img').click(function(){
  //	$(this).next().toggle(); // this line also works;
     $('.dropdown-menu').toggle();
  });

  $('form').submit(function(){
  	var email = $('#email').val();
  	if(email === ""){
  		$('.email-error').text("Please enter your email.");
  	}

  	var password = $('#password').val();
  	if(password === ""){
  		$('.password-error').text("Please enter your password.");
  	}
  	return false;
  });
};

$(document).ready(main);