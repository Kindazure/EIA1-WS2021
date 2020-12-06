function playSample(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}
function beat() {
    var beat = ["kick", "snare", "snare", "kick", "kick", "snare", "hihat"];
    var index = 0;
    var delay = 330;
    setInterval(function () {
        playSample(beat[index]);
        index++;
    }, delay);
}
