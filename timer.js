"use strict";
let buttime = document.querySelector("#playtime");
let inputtime = document.querySelectorAll(".time");
let showtime = document.querySelector("#showtime");
let soundBreak = document.querySelector("#soundbreak");
let soundout = document.querySelector("#sound");
let timerInterval;

let k = false;

let h;
let m;
let s;

console.log(buttime);
console.log(inputtime);
console.log(showtime);

buttime.addEventListener(`click`, checkStartTimer);
soundBreak.addEventListener(`click`, soundbreak);

function soundbreak(){
    soundout.src = '';
}


function checkStartTimer() {
    if (timerInterval >= 1) {
        clearInterval(timerInterval);
        startTimer();
    } else {
        startTimer();
    }
}


function startTimer(){
    h = inputtime[0].value || 0;
    m = inputtime[1].value || 0;
    s = inputtime[2].value || 0;
    timerInterval = setInterval(timerchange, 1000);
}


function timerchange(){
    if (s == 1 && m > 0){
        m--;
        s = 60;
    }
    if (s == 1 && m == 0 && h > 0){
        h--;
        m = 59;
        s = 60;
    }

    s--;
    k = checkTimer(h, m, s);
    if (k){
        clearInterval(timerInterval);
        soundout.src = "./sounds/pressstart.mp3";
        soundout.play();
    }
    changetime(h, m, s);
}


function changetime(h, m, s) {
    showtime.innerHTML = `${h} : ${m} : ${s}`;
}


function checkTimer(h, m, s) {
    if (h == 0 && m == 0 && s == 0){
        return true;
    }else{
        return false;
    }
}
