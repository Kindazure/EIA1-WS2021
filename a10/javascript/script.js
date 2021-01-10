"use strict";
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
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
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
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = todosObjekt.length + " in total";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        todosObjekt.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todosObjekt[index].checked = !todosObjekt[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    todosObjekt.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map