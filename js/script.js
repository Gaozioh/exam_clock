var hour, min, sec;
var today = new Date();
hour = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();
function liveTime() {
    var today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();
    h = checkTime(hour)
    m = checkTime(min);
    s = checkTime(sec);
    document.getElementById('alivetimer').innerHTML = h + ":" + m + ":" + s;
    var live1 = setTimeout(liveTime, 250);
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

function timecountdown() {
    sremain -= 1;
    if (sremain == -1) {
        sremain = 59;
        mremain -= 1;
    }
    if (mremain == -1) {
        mremain = 59;
        hreamin -= 1;
    }
    document.getElementById('timeremainning').innerHTML = hreamin + ":" + mremain + ":" + sremain;
    var live2 = setTimeout(timecountdown, 1000)
    
}

validate = false;

function startexam() {
    //current
    //liveTime();
    
    
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
    //time remainning
    sremain = 0;
    mremain = minlasted;
    hreamin = hourlasted;
    console.log(validate);
    if (!validate) {
        timecountdown();
        validate = true;
    }
    if (mremain == 30) {
        alert("30 minutes left !");
    }
    else if (mremain == 5) {
        alert("5 minute left !")
    }
}

