$(document).ready(function () {
    var maxFields = 20;
    var addButton = $('#plusOne');
    var deleteButton = $('#minusOne');
    var wrapper = $('#userNumbers');
    var fieldInput = '<div><input type="number" class="persons" value="0" name="person" /><p class="difference">$</p></div>';
    var x = 1;

    $(addButton).click(function () {
        if (x < maxFields) {
            x++;
            $(wrapper).append(fieldInput);
            console.log(fieldInput);
        }

    });
    
//    add/delete class if number <0 or >0 make it different colors

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
    var difference = document.getElementsByClassName('difference');

    var pCheck = 0;

//    average of the check total minus each contribution
    
    for (var i = 0; i < personsCheck.length; i += 1) {
        
          var checkValue = personsCheck[i].value;
        pCheck += parseFloat(checkValue);
        
        var payDifference = (checkTotal / personsCheck.length) - checkValue;
        
      
        
        difference[i].innerHTML = "$" + payDifference.toFixed(2);
        
        
        console.log("ct", checkTotal);
        console.log(difference);
        console.log(pCheck);

    }
    
//    var serviceQuality = document.getElementById('serviceQuality');
//    var serviceValue = serviceQuality.value[serviceQuality.selectedIndex].value;
    
    
    paidTotal.innerHTML = (checkTotal * serviceQuality)- pCheck;

    var checkDifference = parseFloat((paidTotal - pCheck).value);
//console.log(difference);

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
