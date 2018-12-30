var value = "0";

var checkForWinner = function() {
    var button1 = document.getElementById("1").value;
    var button2 = document.getElementById("2").value;
    var button3 = document.getElementById("3").value;
    var button4 = document.getElementById("4").value;
    var button5 = document.getElementById("5").value;
    var button6 = document.getElementById("6").value;
    var button7 = document.getElementById("7").value;
    var button8 = document.getElementById("8").value;
    var button9 = document.getElementById("9").value;

    if((button1 == "X" || button1 == "0") && (button1 == button2) && (button2 == button3)) {
        successAlert(button1);
    }
}

var checkNumber = function (number, value) {
    let button;
    switch (number) {
        case 1: button = document.getElementById("1");
            button.value = value;
            button.disabled = true;
            break;

        case 2: button = document.getElementById("2");
            button.value = value;
            button.disabled = true;
            break;

        case 3: button = document.getElementById("3");
            button.value = value;
            button.disabled = true;
            break;

        case 4: button = document.getElementById("4");
            button.value = value;
            button.disabled = true;
            break;

        case 5: button = document.getElementById("5");
            button.value = value;
            button.disabled = true;
            break;

        case 6: button = document.getElementById("6");
            button.value = value;
            button.disabled = true;
            break;

        case 7: button = document.getElementById("7");
            button.value = value;
            button.disabled = true;
            break;

        case 8: button = document.getElementById("8");
            button.value = value;
            button.disabled = true;
            break;

        case 9: button = document.getElementById("9");
            button.value = value;
            button.disabled = true;
            break;
    }
    checkForWinner();
}

var buttonClick = function (number) {
    if (value === "X") {
        value = "0";
        checkNumber(number, value);
    } else if (value === "0") {
        value = "X";
        checkNumber(number, value);
    }
}