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
        var myNode = document.getElementById("userNumbers");
        i=myNode.childNodes.length - 1;
        if(i>=0){
        myNode.removeChild(myNode.childNodes[i]);
        x--;
        }

    });

});

function paidAmount() {
    var checkInput = document.getElementById('paidTotal');
    var person = document.getElementById('check').value;
    checkInput.innerHTML = person;
}
