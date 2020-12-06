"use strict";
var buttons = document.getElementsByClassName("button");
var sounds = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2"];
setTimeout(buttonErstellen, 100);
function buttonErstellen() {
    for (let i = 0; i < 9; i++) {
        buttons[i].addEventListener("click", function () { playSample(sounds[i]); });
    }
}
function playSample(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}
function beat() {
    var beat = ["kick", "snare", "snare", "kick", "kick", "snare", "hihat"];
    var index = 0;
    var delay = 330;
    setInterval(function () {
        if (index < beat.length) {
            playSample(beat[index]);
            index++;
        }
    }, delay);
}
//# sourceMappingURL=script.js.map