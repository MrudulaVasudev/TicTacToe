var value = "0";

var disableTheButtons = function() {
    var button1 = document.getElementById("1").value;
    var button2 = document.getElementById("2").value;
    var button3 = document.getElementById("3").value;
    var button4 = document.getElementById("4").value;
    var button5 = document.getElementById("5").value;
    var button6 = document.getElementById("6").value;
    var button7 = document.getElementById("7").value;
    var button8 = document.getElementById("8").value;
    var button9 = document.getElementById("9").value;

    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
}

var successAlert = function(winner) {
    disableTheButtons();
    var successText = document.getElementById("successText");
    successText.innerHTML = winner + " is the winner.";

    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    popup.style.visibility = "visible";
    overlay.style.visibility = "visible";
}

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
    } else if((button1 == "X" || button1 == "0") && (button1 == button4) && (button4 == button7)) {
        successAlert(button1);
    } else if((button3 == "X" || button3 == "0") && (button3 == button6) && (button6 == button9)) {
        successAlert(button3);
    } else if((button7 == "X" || button7 == "0") && (button7 == button8) && (button8 == button9)) {
        successAlert(button7);
    } else if((button2 == "X" || button2 == "0") && (button2 == button5) && (button5 == button8)) {
        successAlert(button2);
    } else if((button4 == "X" || button4 == "0") && (button4 == button5) && (button5 == button6)) {
        successAlert(button4)
    } else if((button1 == "X" || button1 == "0") && (button1 == button5) && (button5 == button9)) {
        successAlert(button1);
    } else if((button3 == "X" || button3 == "0") && (button3 == button5) && (button5 == button7)) {
        successAlert(button3);
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

var disableButtons = function() {
    var button1 = document.getElementById("1");
    var button2 = document.getElementById("2");
    var button3 = document.getElementById("3");
    var button4 = document.getElementById("4");
    var button5 = document.getElementById("5");
    var button6 = document.getElementById("6");
    var button7 = document.getElementById("7");
    var button8 = document.getElementById("8");
    var button9 = document.getElementById("9");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
}

var reset = function() {
    var button1 = document.getElementById("1");
    var button2 = document.getElementById("2");
    var button3 = document.getElementById("3");
    var button4 = document.getElementById("4");
    var button5 = document.getElementById("5");
    var button6 = document.getElementById("6");
    var button7 = document.getElementById("7");
    var button8 = document.getElementById("8");
    var button9 = document.getElementById("9");

    button1.value = ' ';
    button2.value = ' ';
    button3.value = ' ';
    button4.value = ' ';
    button5.value = ' ';
    button6.value = ' ';
    button7.value = ' ';
    button8.value = ' ';
    button9.value = ' ';
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;

    var warning = document.getElementById("warningMessage");
    warning.innerHTML='';
    warning.classList.remove("alert");
    warning.classList.remove("alert-warning");
    warning.classList.remove("alert-style");
}

var popupDismiss = function() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    popup.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
    disableButtons();
    var warning = document.getElementById("warningMessage");
    warning.classList = "alert alert-warning alert-style";
    warning.innerHTML = "<strong>Warning!</strong> Hit reset to play again."
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