var score = 0;

var number1 = Math.round(Math.random() * 100)
var number1box = document.getElementById("number1")
number1box.innerHTML = number1

var number2 = Math.round(Math.random() * 100)
var number2box = document.getElementById("number1")
number2box.innerHTML = number2



const greaterThan = document.getElementById("greater-than")
greaterThan.onclick = () => {
    if (number1 > number2) {
        score++;
    } else {
        location.href = "./gameover.html?score" + score

    }
    number1 = Math.round(Math.random() * 100)
    number1box.innerHTML = number1
    number2 = Math.round(Math.random() * 100)
    number2box.innerHTML = number2

}

const equalTo = document.getElementById("equal-to")
equalTo.onclick = () => {
    if (number1 == number2) {
        score++;
    } else {
        location.href = "./gameover.html?score" + score

    }
    number1 = Math.round(Math.random() * 100)
    number1box.innerHTML = number1
    number2 = Math.round(Math.random() * 100)
    number2box.innerHTML = number2

}

const lessThan = document.getElementById("less-than")
lessThan.onclick = () => {
    if (number1 < number2) {
        score++;
    } else {
        location.href = "./gameover.html?score" + score

    }
    number1 = Math.round(Math.random() * 100)
    number1box.innerHTML = number1
    number2 = Math.round(Math.random() * 100)
    number2box.innerHTML = number2

}