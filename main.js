$(document).ready(function() {
    var maxFields = 20;
    var addButton = $('#plusOne');
    var deleteButton = $('#minusOne');
    var wrapper = $('#userNumbers');
    var fieldInput = '<div><input type="text" name="persons" id="persons"/></div>';
    var x = 1;

    $(addButton).click(function () {
        if (x < maxFields) {
            x++;
            $(wrapper).append(fieldInput);
        }
    });

    $(deleteButton).click(function(e) {
        e.preventDefault();
         $(wrapper).find('div:last').remove();
        x--;
    });

});
