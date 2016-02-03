var main = function(){
  $('.cart').click(function(){
  	$('.cart .dropdown-menu').toggle();
  	$('.account .dropdown-menu').hide();
  	$('.help .dropdown-menu').hide();
  });
 
  $('.account').click(function(){
  	$('.cart .dropdown-menu').hide();
  	$('.account .dropdown-menu').toggle();
  	$('.help .dropdown-menu').hide();
  });
  
  $('.help').click(function(){
  	$('.cart .dropdown-menu').hide();
  	$('.account .dropdown-menu').hide();
  	$('.help .dropdown-menu').toggle();
  });

};

$(document).ready(main);
