var hour, min, sec;
hour = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();
function startTime() {
    var today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();
    h = checkTime(hour)
    m = checkTime(min);
    s = checkTime(sec);
    document.getElementById('alivetimer').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 250);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;// add zero in front of numbers < 10
    }  
    return i;
}

function formatexamlength(i) {
    hourlasted = Math.floor(i);
    minlasted = Math.floor((i%1)*60);  
}

function hourcheck(i) {
    if (i==60) {
        i = 0;//override minute to 0 if reach 60
    }
    return i;
}

function startexam() {
    //current
    var chour = hour;
    var cmin = min;
    var csec = sec;
    //
    startminute = Math.ceil((cmin+1)/5)*5;//start minute
    starthour = chour+Math.floor(startminute/60);//start hour
    startminute = hourcheck(startminute);//override start minute
    startsecond = 0;//start second
    sm = checkTime(startminute);
    sh = checkTime(starthour);
    document.getElementById('starttime').innerHTML = sh + ":" + sm + ":" + "00";
    //obtain test length
    var item = document.getElementById('selecttest');
    var examlength = item[item.selectedIndex].value;
    formatexamlength(examlength);
    hl = checkTime(hourlasted);//hour lasted
    ml = checkTime(minlasted);//minute lasted
    document.getElementById('examlength').innerHTML = hl + ":" + ml + ":00";
    //
    endminute = (startminute+minlasted)%60;
    endhour = starthour+hourlasted+Math.floor((startminute+minlasted)/60);
    em = checkTime(endminute);
    eh = checkTime(endhour);
    document.getElementById('endtime').innerHTML = eh + ":" + em  + ":" + "00";
    //document.getElementById('testlog').innerHTML = 1;
}

