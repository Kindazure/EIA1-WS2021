"use strict";
var aufgabe11;
(function (aufgabe11) {
    var todosObjekt = [{
            text: "Film schauen",
            checked: true
        }, {
            text: "Backen",
            checked: true
        }, {
            text: "Kochen",
            checked: false
        }];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var opentasks;
    var closedtasks;
    window.addEventListener("load", function () {
        const artyom = new Artyom();
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                todosObjekt.unshift({
                    text: wildcard,
                    checked: false
                });
                drawListToDOM();
                console.log("NEUE Aufgabe wird erstellt: " + wildcard);
                artyom.say(wildcard + "hinzugefügt");
            }
        });
        document.getElementById("start").addEventListener("click", function () {
            artyom.say("Willkommen");
            startContinuousArtyom();
        });
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        opentasks = document.querySelector("#open");
        closedtasks = document.querySelector("#closed");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        for (let index = 0; index < todosObjekt.length; index++) {
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todosObjekt[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosObjekt[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
                updateCounter();
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
        }
        updateCounter();
    }
    function updateCounter() {
        let nropen = todosObjekt.filter(todosObjekt => todosObjekt.checked === false).length;
        let nrdone = todosObjekt.filter(todosObjekt => todosObjekt.checked === true).length;
        counterDOMElement.innerHTML = todosObjekt.length + " in total";
        opentasks.innerHTML = nropen + " open";
        closedtasks.innerHTML = nrdone + " done";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            todosObjekt.unshift({
                text: inputDOMElement.value,
                checked: false
            });
            inputDOMElement.value = "";
        }
        drawListToDOM();
    }
    function toggleCheckState(index) {
        todosObjekt[index].checked = !todosObjekt[index].checked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        todosObjekt.splice(index, 1);
        drawListToDOM();
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=script.js.map