$(document).ready(function () {
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

    $(deleteButton).click(function (e) {
        e.preventDefault();
        var myNode = document.getElementById("userNumbers");
        i = myNode.childNodes.length - 1;
        if (i >= 0) {
            myNode.removeChild(myNode.childNodes[i]);
            x--;
        }

    });

});

function peoplePaid() {
    var checkTotal = document.getElementById('check').value;
    var personsCheck = document.querySelectorAll('#persons').value;
    var paidTotal = document.getElementById('paidTotal');

    for (var i = 1; i < personsCheck.length; i += 1) {
        personsCheck[i] += paidTotal;
    }
    paidTotal.innerHTML = checkTotal - personsCheck;


}

var clicks = 1;

function plusOne() {

    if (clicks < 20){
          clicks += 1;
        document.getElementById('numberOfPeople').innerHTML = clicks;
    }

}

function minusOne() {

    if(clicks >= 1 )
    {
        clicks -= +1
    document.getElementById('numberOfPeople').innerHTML = clicks;
}
}
