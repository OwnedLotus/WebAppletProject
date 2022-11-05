export { };

let inputString: string = "";

const numberButton = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-pervious-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

function InsertOne()
{
    inputString += "1";
}
function InsertTwo()
{
    inputString += "2";
}
function InsertThree()
{
    inputString += "3";
}
function InsertFour()
{
    inputString += "4";
}
function InsertFive()
{
    inputString += "5";
}
function InsertSix()
{
    inputString += "6";
}
function InsertSeven()
{
    inputString += "7";
}
function InsertEight()
{
    inputString += "8";
}
function InsertNine()
{
    inputString += "9";
}
function InsertZero()
{
    inputString += "0";
}

function GeneratePi(iterator: number) {
    let inCircle: number = 0;
    let totalCircle: number = 0;
    
    for (let index = 0; index < iterator; index++) {
    
        let firstNum = Math.random(); 
        let secondNum = Math.random();
    
        let dist = Math.sqrt(Math.pow(firstNum, 2) + Math.pow(secondNum, 2));
    
        if (dist >= 1) {
            inCircle++;
        }
        totalCircle++;
        
    }

    return 4 * (inCircle / totalCircle);
}