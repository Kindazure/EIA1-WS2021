"use strict";
let buttons = document.getElementsByClassName("button");
let sounds = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2"];
setTimeout(buttonErstellen, 100);
function buttonErstellen() {
    for (let i = 0; i < 9; i++) {
        buttons[i].addEventListener("click", function () { playSample(sounds[i]); });
    }
}
function playSample(name) {
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}
function beat() {
    let beat = ["kick", "snare", "snare", "kick", "kick", "snare", "hihat"];
    let delay = [300, 100, 1600, 100, 100, 100, 110];
    let currentDelay = 0;
    for (let i = 0; i < beat.length; i++) {
        setTimeout(function () { playSample(beat[i]); }, currentDelay);
        currentDelay += delay[i];
    }
    /*
    setInterval(function (): void {
        if (index < beat.length) {
            playSample(beat[index]);
            index++;
        }
    }, delay); */
}
//# sourceMappingURL=script.js.map