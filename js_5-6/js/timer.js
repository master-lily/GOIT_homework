/**
 * Created by Lily on 10.04.2016.
 */
var time = 0;
var running = 0;

var minutes;
var seconds;
var hours;
var milliseconds;



function reset() {
    time = 0;
    running = 0;
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("output").innerHTML = "00:00:00";
}

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




startStop();
console.log(startStop);




function countTime() {
    if (running === 1) {
        setTimeout(function() {
            time++;
            var minutes = Math.floor(time/10/60);
            var seconds = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60);
            var milliseconds = time % 10;

            if (hours < 10) {
                hours = "0" + hours;
            }

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            document.getElementById("output").innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds + "00";
            countTime();



        }, 100)
    }



}

function split (){
    if (running === 1) {
        time++;
        document.getElementById("split").innerHTML = "Split: " + hours + ":" + minutes + ":" + seconds;
        countTime();
    }
}
split();








