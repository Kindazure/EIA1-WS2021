var buttons: HTMLCollectionOf<Element> = document.getElementsByClassName("button");
var sounds: string[] = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2"]

setTimeout(buttonErstellen,100);
function buttonErstellen():void {
    for (let i: number = 0; i < 9; i++) {
        buttons[i].addEventListener("click", function (): void { playSample(sounds[i]); });
    }
}



function playSample(name: string) {
    var sound: HTMLAudioElement = new Audio("sounds/" + name + ".mp3");
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