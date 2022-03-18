let tens = 0
let second = 0

const buttonStart = document.getElementById("button-start")
const buttonStop = document.getElementById("button-stop")
const buttonReset = document.getElementById("button-reset")

const Tens = document.getElementById("tens")
const Second = document.getElementById("second")

let Interval 

const buttonStartFunc = () => {
    Interval = setInterval(startTimer, 10)
}
const buttonStopFunc = () => {
    clearInterval(Interval)
}
const buttonResetFunc = () => {
    clearInterval(Interval)
    tens = 0
    Tens.innerHTML = `0${tens}`
    second = 0
    Second.innerHTML = `0${second}`
}

function startTimer() {
    console.log(tens)
    tens++;
    if (tens <=9 ) {
        Tens.innerHTML = `0${tens}`
    }
    if (tens > 9) {
        Tens.innerHTML = tens
    }
    if (tens > 99) {
        second++;
        Second.innerHTML = `0${second}`
        tens = 0;
        Tens.innerHTML = `00`
    }
    if(second > 9) {
        Second.innerHTML = second
    }
}
buttonStart.addEventListener("click", buttonStartFunc);
buttonStop.addEventListener("click", buttonStopFunc);
buttonReset.addEventListener("click", buttonResetFunc);