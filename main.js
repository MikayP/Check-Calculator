$(document).ready(function () {
    var maxFields = 20;
    var addButton = $('#plusOne');
    var deleteButton = $('#minusOne');
    var wrapper = $('#userNumbers');
    var fieldInput = '<div><input type="text" name="persons" class="persons"/></div>';
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
//    var personsCheck = parseFloat(document.getElementsByClassName('persons')[0].value);

function peoplePaid() {
    var checkTotal = parseFloat(document.getElementById('check').value);
    var personsCheck = document.getElementsByClassName('persons');
    var paidTotal = document.getElementById('paidTotal');
    var serviceQuality = document.getElementById('serviceQuality').value;
    var difference = document.getElementsByClassName('difference').value;

    var pCheck = 0;

    for (var i = 0; i < personsCheck.length; i += 1) {
        pCheck += parseFloat(personsCheck[i].value);

    }
    paidTotal.innerHTML = (checkTotal * serviceQuality).toFixed(3) - pCheck.toFixed(3);
    var checkDifference = 0;
    for (var i = 0; i < personsCheck.length; i += 1) {

        checkDifference = parseFloat(paidTotal - pCheck).value;
    }

    checkDifference.innerHTML = '';

    console.log(checkDifference);

}

var clicks = 1;

function plusOne() {

    if (clicks < 20) {
        clicks += 1;
        document.getElementById('numberOfPeople').innerHTML = clicks;
    }

}

function minusOne() {

    if (clicks >= 1) {
        clicks -= +1
        document.getElementById('numberOfPeople').innerHTML = clicks;
    }
}
