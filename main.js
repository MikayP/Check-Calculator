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

function peoplePaid() {
    var checkTotal = document.getElementById('check').value;
    var personsCheck = document.getElementById('persons').value;
    var paidTotal = document.getElementById('paidTotal');

    for(var i = 1; i < personsCheck.length; i+=1){
        personsCheck[i] += paidTotal;
    }
    paidTotal.innerHTML = checkTotal - personsCheck;


}

function plusOne() {
    var button = document.getElementById('plusOne');
    var numPeople = document.getElementById('numberOfPeople');
    numPeople.innerHTML = button.value += 1;
}

function minusOne() {
    var button = document.getElementById('minusOne');
    var numPeople = document.getElementById('numberOfPeople');
    var userNumbers = document.getElementById('userNumbers').length;
    if(userNumbers > 1 ){
       numPeople.innerHTML = button.value -= 1;
       }
}
