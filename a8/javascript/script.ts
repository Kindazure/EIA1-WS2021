let buttons: HTMLCollectionOf<Element> = document.getElementsByClassName("button");
let sounds: string[] = ["hihat", "snare", "kick", "A", "C", "F", "G", "laugh-1", "laugh-2", "A_3", "A_4", "A5", "B3", "B4", "C4", "C5", "D4", "D5", "D6", "F5", "G_5", "G5"];


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


//MEGA BEAT
let mega: string[] = ["x",
    "D5", "D5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "C5", "C5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "B4", "B4", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "D4", "D5", "D5", "D4", "D6", "D4", "A5", "D4", "D4", "G_5", "D4", "G5", "D4", "F5", "D4", "D5", "D4", "F5", "G5",
    "C4", "C5", "C5", "C4", "D6", "C4", "A5", "C4", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5",
    "B3", "B4", "B4", "B3", "D6", "B3", "A5", "B3", "B3", "G_5", "B3", "G5", "B3", "F5", "B3", "D5", "B3", "F5", "G5",
    "A_3", "A_4", "A_4", "A_3", "D6", "A_3", "A5", "A_3", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5"
];

let beat: string[] = ["x",
    "D5", "D5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "C5", "C5", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "B4", "B4", "D6", "A5", "G_5", "G5", "F5", "D5", "F5", "G5",
    "D4", "D5", "D5", "D4", "D6", "D4", "A5", "D4", "D4", "G_5", "D4", "G5", "D4", "F5", "D4", "D5", "D4", "F5", "G5",
    "C4", "C5", "C5", "C4", "D6", "C4", "A5", "C4", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5",
    "B3", "B4", "B4", "B3", "D6", "B3", "A5", "B3", "B3", "G_5", "B3", "G5", "B3", "F5", "B3", "D5", "B3", "F5", "G5",
    "A_3", "A_4", "A_4", "A_3", "D6", "A_3", "A5", "A_3", "C4", "G_5", "C4", "G5", "C4", "F5", "C4", "D5", "C4", "F5", "G5"
];

let delay: number[] = [100,
    125, 125, 250, 375, 250, 250, 250, 125, 125, 125,
    125, 125, 250, 375, 250, 250, 250, 125, 125, 125,
    125, 125, 250, 375, 250, 250, 250, 125, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125,
    0, 125, 125, 0, 250, 0, 125, 250, 0, 250, 0, 250, 0, 250, 0, 125, 0, 125, 125
];


let toggelwert: boolean = false;
let pBeat: ReturnType<typeof setTimeout>[] = [];

function playbeat(): void {
    let currentDelay: number = 0;

    for (let i: number = 1; i < beat.length; i++) {
        if (toggelwert) {
            pBeat[i] = setTimeout(function (): void { playSample(beat[i]); }, currentDelay);
            currentDelay += delay[i];
        }
    }
}


//SWITCH PLAY PAUSE
function toggleClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}


//RECORD BUTTON
function getRect(): void {
    let recButton: HTMLElement = document.getElementById("record");
    recButton.addEventListener("click", function (): void {
        bulien(recButton);
    });
}


//ZAHLEN ZUM ZÄHLEN DER BUTTONS UND ZEIT
let time: number = performance.now();
let counter: number = 1;


//STELLT REC BUTTON EIN
let toggelrec: boolean = false;
function bulien(element: HTMLElement): void {
    toggelrec = !toggelrec;
    if (toggelrec) {
        beat = [];
        delay = [];
        counter = 1;
        element.style.opacity = "50%";
        time = performance.now();
    } else {
        element.style.opacity = "100%";
    }
}


//WEIST DEM BUTTON EVLIST HINZU
function recEvent(): void {
    for (let i: number = 0; i < 9; i++) {
        let butts: HTMLElement = document.getElementById(sounds[i]);
        butts.addEventListener("click", function (): void {
            record(sounds[i]);

        });
    }
}

//SETZT SOUNDS UND DELAY IN ARRAY
function record(sound: string): void {
    let currentTime: number = performance.now();
    if (toggelrec) {
        beat[counter] = sound;
        delay[counter - 1] = currentTime - time;
        time = currentTime;
        counter++;

    }
}

let toggleLoop: boolean = false;
let playInterval: ReturnType<typeof setInterval>;

function getLooped(): void {
    let loopButton: HTMLElement = document.getElementById("loop");
    loopButton.addEventListener("click", function (): void {
        toggleLoop = !toggleLoop;
        console.log(toggleLoop);
        if (toggleLoop) {
            loopButton.style.opacity = "50%";
        } else {
            loopButton.style.opacity = "100%";
            clearInterval(playInterval);
        }
    });
}

function loop(): void {
    let allDelay: number = 0;
    for (let i: number = 1; i < delay.length; i++) {
        allDelay = allDelay + delay[i];
    }
    allDelay = allDelay + 400 + delay[1];
    playInterval = setInterval(playbeat, allDelay);
}


//WEIL ALLE HTML ELEMENTE GELAEND SEIN MÜSSEN
setTimeout(eventdings, 100);
function eventdings(): void {
    const playbtn: HTMLElement = document.getElementById("play");
    const pausebtn: HTMLElement = document.getElementById("pause");

    playbtn.addEventListener("click", function (): void {
        toggleClasses(this, pausebtn);
        toggelwert = true;
        if (toggleLoop == false) {
            playbeat();
        } else {
            playbeat();
            loop();
        }
        checkMega();

    });

    pausebtn.addEventListener("click", function (): void {
        toggleClasses(this, playbtn);
        toggelwert = false;
        for (let i: number = 0; i < pBeat.length; i++) {
            clearTimeout(pBeat[i]);

        }
        let sans: HTMLElement = document.getElementById("sans");
        sans.style.opacity = "0%";
        clearInterval(playInterval);
    });


//DELETE BUTTON
    let dltbutton: HTMLElement = document.getElementById("delete");

    dltbutton.addEventListener("click", function (): void {
        beat = [];
        delay = [];
    }
    );
    recEvent();
    getRect();
    getLooped();
}

function checkMega(): void {
    let isMega: boolean = true;
    for (let i: number = 0; i < mega.length; i++) {
        if (beat[i] != mega[i]) {
            isMega = false;
        }
    }
    if (isMega) {
        let sans: HTMLElement = document.getElementById("sans");
        sans.style.opacity = "100%";
    }
}

//KEYBOARD BEAT
document.addEventListener("keypress", pressed);
function pressed(e: KeyboardEvent): void {
    for (let i: number = 0; i < 9; i++) {
        if (e.key == "" + (i + 1)) {
            record(sounds[i]);
            playSample(sounds[i]);
        }
    }
}

//HI CHRISTIAN! DANKE FÜRS WARTEN ICH HOFFE DER CODE IST SO OKAY :3