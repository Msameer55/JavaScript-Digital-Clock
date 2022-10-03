const display = document.getElementById('clock');

function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var amOrpm = "AM";

    if (hours > 12) {
        amOrpm = "PM";
    }
    if (hours > 12) 
        hours = hours - 12;
    
    if (hours < 10) 
        hours = "0" + hours;
    
    if (minutes < 10) 
        minutes = "0" + minutes;
    
    if (seconds < 10) 
        seconds = "0" + seconds;
    

    display.innerHTML = hours + ":" + minutes + ":" + seconds + " " + amOrpm;



}

setInterval(updateTime, 1000);