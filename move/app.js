var main = function() {
  var cities = ['Beijing', 'Shanghai', 'Xi\'an', 'Chongqing'];
  $('#search').autocomplete({
  	source:cities
  });
};
 
$(document).ready(main);