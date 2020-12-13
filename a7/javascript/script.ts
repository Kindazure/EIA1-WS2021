let buttons: HTMLCollectionOf<Element> = document.getElementsByClassName("button");
let sounds: string[] = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2"];

setTimeout(buttonErstellen, 100);
function buttonErstellen(): void {
    for (let i: number = 0; i < 9; i++) {
        buttons[i].addEventListener("click", function (): void { playSample(sounds[i]); });
    }
}



function playSample(name: string): void {
    let sound: HTMLAudioElement = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function beat(): void {
    let beat: string[] = ["kick", "snare", "snare", "kick", "kick", "snare", "hihat"];
    let delay: number[] = [300, 100, 1600, 100, 100, 100, 110];
    let currentDelay: number = 0;

    for (let i: number = 0; i < beat.length; i++) {
        setTimeout(function (): void { playSample(beat[i]); }, currentDelay);
        currentDelay += delay[i];
    }


