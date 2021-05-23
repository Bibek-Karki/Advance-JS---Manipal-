function getTime(){
    var today = new Date();
    
    //Extract the individual components of time
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    //add a zero in front of numbers <10
    min = checkTime(min);
    sec = checkTime(sec);
    
    //Print the time to the screen
    document.getElementById('txt').innerHTML = " " + hr + ":" + min + ":" + sec;
    
    //Repeat the same for the time in UTC
    var hr2 = today.getUTCHours();
    var min2 = today.getUTCMinutes();
    var sec2 = today.getUTCSeconds();
    min2 = checkTime(min2);
    sec2 = checkTime(sec2);

    document.getElementById('UTCtxt').innerHTML = " " + hr2 + ":" + min2 + ":" + sec2;

    //use the setTimeout function and call getTime again after 1000 milliseconds or 1 sec
    setTimeout(function(){getTime()},1000);
}

function checkTime(i){
    if (i<10){
        i = "0" + i;
    }
    return i;
}