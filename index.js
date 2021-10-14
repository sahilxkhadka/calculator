let screen = document.getElementById("screen")
buttons = document.querySelectorAll('button')
let screenValue = ""
for(item of buttons) {
    item.addEventListener("click", function(value) {
        buttonText = value.target.innerText
        if (buttonText == "X") {
            buttonText = "*"
            screenValue += buttonText
            screen.value = screenValue
        }
        else if (buttonText == "AC") {
            screenValue = ""
            screen.value = screenValue
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue)
        }
        else if (buttonText == "C") {
            backspace = screen.value;
            restNum = backspace.slice(0,-1);
            screenValue = restNum;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}
