/**
 * Created by Lily on 10.04.2016.
 */
var time = 0;
var running = 0;

var q = 0;
var spl = 0;

var minutes;
var seconds;
var hours;
var milliseconds;

var splitList = document.querySelector('.split__list');

/*var list = document.querySelector('li');
list.classList.add('li');
var stopItem = document.querySelector('liStop');
stopItem.classList.add('stop_counter');
var splitItem = document.querySelector('liSplit');
splitItem.classList.add('split_counter');*/

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
            var minutes = Math.floor(time/10/60);
            var seconds = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60);
            var milliseconds = parseInt(time % 10);

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

/*function split(){
    if (running === 1) {
        q++;
        splitItem.innerHTML = "Split: " + [q] + hours + ":" + minutes + ":" + seconds;

        list.appendChild(splitItem);
        debugger;
      stopItem.innerHTML = "Stop: " +  hours + ":" + minutes + ":" + seconds;
        list.appendChild(stopItem);

    }
}*/

function split() {
    if (spl == 1) {
        var splitListItem = document.createElement('p');
        q++;
        splitListItem.classList.add('split__list__item');
        splitListItem.innerHTML = 'Split ' + [q] +  hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        splitList.appendChild(splitListItem);
    }
}
















