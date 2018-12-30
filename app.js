var value = "O";

/* Disabling the buttons already clicked */

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

/* When the winner is found */

var successAlert = function(winner) {
    disableTheButtons();
    var successText = document.getElementById("successText");
    successText.innerHTML = winner + " is the winner.";

    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    popup.style.visibility = "visible";
    overlay.style.visibility = "visible";
}

/* Winner */

var checkForWinner = function() {
    var bgColor = 'steelblue';
    var button1 = document.getElementById("1");
    var button2 = document.getElementById("2");
    var button3 = document.getElementById("3");
    var button4 = document.getElementById("4");
    var button5 = document.getElementById("5");
    var button6 = document.getElementById("6");
    var button7 = document.getElementById("7");
    var button8 = document.getElementById("8");
    var button9 = document.getElementById("9");

    if((button1.value == "X" || button1.value == "O") && (button1.value == button2.value) && (button2.value == button3.value)) {
        button1.style.backgroundColor = button2.style.backgroundColor = button3.style.backgroundColor = bgColor;
        successAlert(button1.value);
    } else if((button1.value == "X" || button1.value == "O") && (button1.value == button4.value) && (button4.value == button7.value)) {
        button1.style.backgroundColor = button4.style.backgroundColor = button7.style.backgroundColor = bgColor;
        successAlert(button1.value);
    } else if((button3.value == "X" || button3.value == "O") && (button3.value == button6.value) && (button6.value == button9.value)) {
        button3.style.backgroundColor = button6.style.backgroundColor = button9.style.backgroundColor = bgColor;
        successAlert(button3.value);
    } else if((button7.value == "X" || button7.value == "O") && (button7.value == button8.value) && (button8.value == button9.value)) {
        button7.style.backgroundColor = button8.style.backgroundColor = button9.style.backgroundColor = bgColor;
        successAlert(button7.value);
    } else if((button2.value == "X" || button2.value == "O") && (button2.value == button5.value) && (button5.value == button8.value)) {
        button2.style.backgroundColor = button5.style.backgroundColor = button8.style.backgroundColor = bgColor;
        successAlert(button2.value);
    } else if((button4.value == "X" || button4.value == "O") && (button4.value == button5.value) && (button5.value == button6.value)) {
        button4.style.backgroundColor = button5.style.backgroundColor = button6.style.backgroundColor = bgColor;
        successAlert(button4.value)
    } else if((button1.value == "X" || button1.value == "O") && (button1.value == button5.value) && (button5.value == button9.value)) {
        button1.style.backgroundColor = button5.style.backgroundColor = button9.style.backgroundColor = bgColor;
        successAlert(button1.value);
    } else if((button3.value == "X" || button3.value == "O") && (button3.value == button5.value) && (button5.value == button7.value)) {
        button3.style.backgroundColor = button5.style.backgroundColor = button7.style.backgroundColor = bgColor;
        successAlert(button3.value);
    }
}

/* Finding the box that is clicked */

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

/* The buttons already clicked will be disabled to be further clicked */

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

/* Clicking on reset to play a new game */

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
    button1.style.backgroundColor='darkseagreen';
    button2.style.backgroundColor='darkseagreen';
    button3.style.backgroundColor='darkseagreen';
    button4.style.backgroundColor='darkseagreen';
    button5.style.backgroundColor='darkseagreen';
    button6.style.backgroundColor='darkseagreen';
    button7.style.backgroundColor='darkseagreen';
    button8.style.backgroundColor='darkseagreen';
    button9.style.backgroundColor='darkseagreen';
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

/* On popup disappearing */

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

/* Clicking the squares */

var buttonClick = function (number) {
    var bgColor;
    if (value === "X") {
        value = "O";
        checkNumber(number, value);
    } else if (value === "O") {
        value = "X";
        checkNumber(number, value);
    }
}