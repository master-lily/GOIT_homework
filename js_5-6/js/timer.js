/**
 * Created by Lily on 10.04.2016.
 */
var time = 0;
var running = 0;


var minutes;
var seconds;
var hours;
var milliseconds;


function startStop(){
    if (running === 0) {
        running = 1;
        countTime();
        document.getElementById("startStop").innerHTML = 'Stop';

    } else {
        running = 0;
        document.getElementById("startStop").innerHTML = 'Start';
    }

}


function reset() {
   time = 0;
    running = 0;
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("output").innerHTML = "00:00:00.000";
}




function countTime() {
    if (running === 1) {
        setTimeout(function() {
            time++;


            milliseconds = (time-1)% 1000;
            seconds = Math.floor((time-1) / 1000 % 60);
            minutes = Math.floor((time-1) / 60000 % 60);
            hours = Math.floor((time-1) / 86400000 % 24);


            if (hours < 10) {
                hours = "0" + hours;
            }

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }



            document.getElementById("output").innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
            countTime();



        }, 1)
    }
}


















