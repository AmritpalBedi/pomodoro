// variables

let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 2;
let breakTime = 5;

let seconds = "00";

// display
window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;

    workTitle.classList.add("active");
}

// start timer
function start() {
    // change button
    document.getElementById("start").style.display= "none";
    document.querySelector(".work-icons").style.display= "flex";
    document.getElementById("next").style.display= "none";
    

    // change time
    seconds = 15;

    let workMinutes = workTime - 1;
    let breakMinutes =  breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        // Display current time
        document.getElementById("minutes").innerHTML = workMinutes;

        if (seconds < 10) {
            document.getElementById("seconds").innerHTML = "0" + seconds;
        } else {
            document.getElementById("seconds").innerHTML = seconds;
        }
        
        seconds = seconds -  1;

        if (seconds == -1) {
            workMinutes = workMinutes - 1;
            document.getElementById("next").style.display= "block";
            if (workMinutes >= 0) {
                seconds = 59;
            } else {
                // Add overtime 
            }
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); 
}