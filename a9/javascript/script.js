"use strict";
let liste = [];
let clickme = 0;
let globalCounter = 0;
class Task {
    constructor(_state, _text) {
        this.state = _state;
        this.text = _text;
    }
    //Fügt  einen Neuen task der Liste Hinzu
    listeAdd(_pos) {
        let newElement = document.createElement("div");
        let divListe = document.getElementById("liste");
        let newInput = document.createElement("input");
        let newTrash = document.createElement("i");
        let newLabel = document.createElement("label");
        //Der Task kright onuterobjekte zugewiesen
        newElement.appendChild(newInput);
        newElement.appendChild(newLabel);
        newElement.appendChild(newTrash);
        newElement.setAttribute("class", "listeIn");
        //Die "Checkbox" wird hinzugefügt undmit eventListener versehen
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("id", "con" + _pos);
        newInput.addEventListener("click", function () {
            zuweisen(_pos);
        });
        //Trashcan Hinzugefügt und Mit eventListener vesehen
        newTrash.setAttribute("class", "fas fa-trash-alt trash");
        newTrash.addEventListener("click", function () {
            newElement.remove();
            liste[_pos] = null;
            globalCounter--;
            globalCount();
        });
        //Labels  werden  angepasst
        newLabel.setAttribute("for", "con" + _pos);
        newLabel.innerHTML = this.text;
        //Checkt welche liste ausgewählt wurde und fügt die Elemente dieser hinzu
        if (clickme == 1 && this.state == true) {
            divListe.appendChild(newElement);
        }
        if (clickme == 2 && this.state == false) {
            divListe.appendChild(newElement);
        }
        if (clickme == 0) {
            divListe.appendChild(newElement);
        }
    }
}
//Setzt den state der jeweiligen elemente  nach listen  creation
function check() {
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] != null) {
            if (liste[i].state == true) {
                let myElem = document.getElementById("con" + i);
                if (myElem != null) {
                    myElem.checked = true;
                }
            }
        }
    }
}
//Weist den state auch im objekt zu
function zuweisen(_pos) {
    if (liste[_pos].state) {
        liste[_pos].state = false;
    }
    else {
        liste[_pos].state = true;
    }
}
//Ändert die Liste (dre verschiedene)
function changelist() {
    let clickbutton = document.getElementById("clickme");
    if (clickme == 2) {
        clickbutton.innerHTML = "Change to Completed";
        clickbutton.style.backgroundColor = "rgb(188,120,255)";
        clickme = -1;
    }
    else if (clickme == 1) {
        clickbutton.innerHTML = "Change to All";
        clickbutton.style.backgroundColor = "rgb(252, 222, 231)";
    }
    else {
        clickbutton.innerHTML = "Change to Uncompleted";
        clickbutton.style.backgroundColor = "rgb(202,255,208)";
    }
    clickme++;
    let newListe = document.getElementById("liste");
    newListe.innerHTML = "";
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] != null) {
            liste[i].listeAdd(i);
            check();
        }
    }
}
//Funktion für die Texteingabe
let counter = 0;
function inputText() {
    document.getElementById("myInput").addEventListener("keypress", (e) => {
        if (e.code === "Enter") {
            let newTask = new Task(false, document.getElementById("myInput").value);
            liste[counter] = newTask;
            newTask.listeAdd(counter);
            document.getElementById("myInput").value = "";
            counter++;
            globalCounter++;
            globalCount();
        }
    });
}
//globaler counter für die anzahl der tasks
function globalCount() {
    let newText = document.getElementById("TasksText");
    newText.innerHTML = "Current Tasks: " + globalCounter;
}
//Seitenablauf
setTimeout(init, 100);
function init() {
    setTimeout(check, 50);
    document.getElementById("clickme").addEventListener("click", changelist);
    inputText();
}
//# sourceMappingURL=script.js.map