"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputString = "";
var numberButton = document.querySelectorAll('[data-number]');
var operationButtons = document.querySelectorAll('[data-operation]');
var equalsButton = document.querySelector('[data-equals');
var deleteButton = document.querySelector('[data-delete');
var allClearButton = document.querySelector('[data-all-clear');
var previousOperandTextElement = document.querySelector('[data-pervious-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand');
function InsertOne() {
    inputString += "1";
}
function InsertTwo() {
    inputString += "2";
}
function InsertThree() {
    inputString += "3";
}
function InsertFour() {
    inputString += "4";
}
function InsertFive() {
    inputString += "5";
}
function InsertSix() {
    inputString += "6";
}
function InsertSeven() {
    inputString += "7";
}
function InsertEight() {
    inputString += "8";
}
function InsertNine() {
    inputString += "9";
}
function InsertZero() {
    inputString += "0";
}
//# sourceMappingURL=main.js.map