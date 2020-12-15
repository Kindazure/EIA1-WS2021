let buttons: HTMLCollectionOf<Element> = document.getElementsByClassName("button");
let sounds: string[] = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2"];

//BUTTON ERSTELLEN
setTimeout(buttonErstellen, 100);
function buttonErstellen(): void {
    for (let i: number = 0; i < 9; i++) {
        buttons[i].addEventListener("click", function (): void { playSample(sounds[i]); });
    }
}


//BUTTON ABSPIELEN
function playSample(name: string): void {
    let sound: HTMLAudioElement = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function beat(): void {
    let beat: string[] = ["kick", "kick", "kick", "snare"];
    let delay: number[] = [300, 300, 300, 300];
    let currentDelay: number = 0;

    for (let i: number = 0; i < beat.length; i++) {
        setTimeout(function (): void { playSample(beat[i]); }, currentDelay);
        currentDelay += delay[i];
    }

//SWITCH PLAY PAUSE
const playbtn: HTMLElement = document.getElementById("play");
const pausebtn: HTMLElement= document.getElementById("pause")

playbtn.addEventListener("click", function(): void {
    toggleClasses(this, pausebtn)
})

pausebtn.addEventListener("click", function(): void {
    toggleClasses(this, playbtn)
})

function toggleClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}

