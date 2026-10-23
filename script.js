
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
            firstNumber = "";
            operator = "";

        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);

        } else if (["+", "-", "*", "/"].includes(value)) {
            firstNumber = display.value;
            operator = value;
            display.value = "";

        } else if (value === "=") {
            const secondNumber = Number(display.value);
            const first = Number(firstNumber);
            let result;

            if (operator === "+") {
                result = first + secondNumber;
            } else if (operator === "-") {
                result = first - secondNumber;
            } else if (operator === "*") {
                result = first * secondNumber;
            } else if (operator === "/") {
                result = first / secondNumber;
            }

            display.value = result;
            firstNumber = "";
            operator = "";

        } else {
            display.value += value;
        }
    });
});




