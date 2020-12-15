"use strict";
let buttons = document.getElementsByClassName("button");
let sounds = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2", "A_3", "A_4", "A5", "B3", "B4", "C4", "C5", "D4", "D5", "D6", "F5", "G_5", "G5"];
//BUTTON ERSTELLEN
setTimeout(buttonErstellen, 100);
function buttonErstellen() {
    for (let i = 0; i < 9; i++) {
        buttons[i].addEventListener("click", function () { playSample(sounds[i]); });
    }
}
//BUTTON ABSPIELEN
function playSample(name) {
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}
//MEGA BEAT
let mega = ["x",
    "D5", "D5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "C5", "C5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "B4", "B4", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "D4", "D5", "D5", "D4", "D6", "D4", "A5", "D4", "D4", "G_5", "D4", "G5", "D4", "F5", "D4", "D5", "D4", "F5", "G5",
    "C4", "C5", "C5", "C4", "D6", "C4", "A5", "C4", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5",
    "B3", "B4", "B4", "B3", "D6", "B3", "A5", "B3", "B3", "G_5", "B3", "G5", "B3", "F5", "B3", "D5", "B3", "F5", "G5",
    "A_3", "A_4", "A_4", "A_3", "D6", "A_3", "A5", "A_3", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5"
];
let beat = ["x",
    "D5", "D5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "C5", "C5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "B4", "B4", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "D4", "D5", "D5", "D4", "D6", "D4", "A5", "D4", "D4", "G_5", "D4", "G5", "D4", "F5", "D4", "D5", "D4", "F5", "G5",
    "C4", "C5", "C5", "C4", "D6", "C4", "A5", "C4", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5",
    "B3", "B4", "B4", "B3", "D6", "B3", "A5", "B3", "B3", "G_5", "B3", "G5", "B3", "F5", "B3", "D5", "B3", "F5", "G5",
    "A_3", "A_4", "A_4", "A_3", "D6", "A_3", "A5", "A_3", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5"
];
let delay = [100,
    125, 125, 250, 375, 250, 250, 250, 125, 125, 125,
    125, 125, 250, 375, 250, 250, 250, 125, 125, 125,
    125, 125, 250, 375, 250, 250, 250, 125, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125
];
let toggelwert = false;
let pBeat = [];
function playbeat() {
    let currentDelay = 0;
    for (let i = 1; i < beat.length; i++) {
        if (toggelwert) {
            pBeat[i] = setTimeout(function () { playSample(beat[i]); }, currentDelay);
            currentDelay += delay[i];
        }
    }
}
//SWITCH PLAY PAUSE
function toggleClasses(firstHTMLElement, secondHTMLElement) {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}
//RECORD BUTTON
function getRect() {
    let recButton = document.getElementById("record");
    recButton.addEventListener("click", function () {
        bulien(recButton);
    });
}
//ZAHLEN ZUM ZÄHLEN DER BUTTONS UND ZEIT
let time = performance.now();
let counter = 1;
//STELLT REC BUTTON EIN
let toggelrec = false;
function bulien(element) {
    toggelrec = !toggelrec;
    if (toggelrec) {
        beat = [];
        delay = [];
        counter = 1;
        element.style.opacity = "50%";
        time = performance.now();
    }
    else {
        element.style.opacity = "100%";
    }
}
//WEIST DEM BUTTON EVLIST HINZU
function recEvent() {
    for (let i = 0; i < 9; i++) {
        let butts = document.getElementById(sounds[i]);
        butts.addEventListener("click", function () {
            record(sounds[i]);
        });
    }
}
//SETZT SOUNDS UND DELAY IN ARRAY
function record(sound) {
    let currentTime = performance.now();
    if (toggelrec) {
        beat[counter] = sound;
        delay[counter - 1] = currentTime - time;
        time = currentTime;
        counter++;
    }
}
let toggleLoop = false;
let playInterval;
function getLooped() {
    let loopButton = document.getElementById("loop");
    loopButton.addEventListener("click", function () {
        toggleLoop = !toggleLoop;
        console.log(toggleLoop);
        if (toggleLoop) {
            loopButton.style.opacity = "50%";
        }
        else {
            loopButton.style.opacity = "100%";
            clearInterval(playInterval);
        }
    });
}
function loop() {
    let allDelay = 0;
    for (let i = 1; i < delay.length; i++) {
        allDelay = allDelay + delay[i];
    }
    allDelay = allDelay + 400 + delay[1];
    playInterval = setInterval(playbeat, allDelay);
}
//WEIL ALLE HTML ELEMENTE GELAEND SEIN MÜSSEN
setTimeout(eventdings, 100);
function eventdings() {
    const playbtn = document.getElementById("play");
    const pausebtn = document.getElementById("pause");
    playbtn.addEventListener("click", function () {
        toggleClasses(this, pausebtn);
        toggelwert = true;
        if (toggleLoop == false) {
            playbeat();
        }
        else {
            playbeat();
            loop();
        }
        checkMega();
    });
    pausebtn.addEventListener("click", function () {
        toggleClasses(this, playbtn);
        toggelwert = false;
        for (let i = 0; i < pBeat.length; i++) {
            clearTimeout(pBeat[i]);
        }
        let sans = document.getElementById("sans");
        sans.style.opacity = "0%";
        clearInterval(playInterval);
    });
    //DELETE BUTTON
    let dltbutton = document.getElementById("delete");
    dltbutton.addEventListener("click", function () {
        beat = [];
        delay = [];
    });
    recEvent();
    getRect();
    getLooped();
}
function checkMega() {
    let isMega = true;
    for (let i = 0; i < mega.length; i++) {
        if (beat[i] != mega[i]) {
            isMega = false;
        }
    }
    if (isMega) {
        let sans = document.getElementById("sans");
        sans.style.opacity = "100%";
    }
}
//KEYBOARD BEAT
document.addEventListener("keypress", pressed);
function pressed(e) {
    for (let i = 0; i < 9; i++) {
        if (e.key == "" + (i + 1)) {
            record(sounds[i]);
            playSample(sounds[i]);
        }
    }
}
//HI CHRISTIAN! DANKE FÜRS WARTEN ICH HOFFE DER CODE IST SO OKAY :3
//# sourceMappingURL=script.js.map