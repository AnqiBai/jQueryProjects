var template = function(text) {
    return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var add = function(item) {
    var html = template(item);
    $(html).appendTo('.list');
}

var remove = function(item) {

    var listItem = document.getElementsByTagName("span");
    var toDelete;
    for (var i = 0; i < listItem.length; i++) {
        var tItem = listItem[i];
      //  console.log(tItem);
        if ($(tItem).text() === item) {
            toDelete = tItem;
            break;
        }
    }
    $(tItem).parent().remove();
}

 var main = function() {
        $('form').submit(function() {
            var todo = $('#todo');
            if (todo.val() !== "") {
                var html = template(todo.val());
                $(html).appendTo('.list');
                $(todo).val("");
            }
            return false;
        });
        $(document).on("click", '.glyphicon-remove', function() {
            $(this).parent().remove();
        });
        $(document).on("click", '.glyphicon-star', function() {
            $(this).toggleClass('active');
        });
        if (annyang) {
            var commands = {
                'add *item': add,
                'remove *item' : remove,
            };
            annyang.addCommands(commands);
            annyang.start();
        }
    };

$(document).ready(main);