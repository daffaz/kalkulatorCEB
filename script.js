let prevNumber = "",calculationOperator = "";
let currentNumber = '0';

const numbers = document.querySelectorAll(".angka");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".sama-dengan");
const clearButton = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const persen = document.querySelector(".persen");

persen.addEventListener("click",()=>{
    let fak = "";
    currentNumber /= 100;
    fak = currentNumber + "%";
    updateScreen(fak);
})

decimal.addEventListener("click",()=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

clearButton.addEventListener("click",()=>{
    clearAll();
    updateScreen(currentNumber);
})

equalSign.addEventListener("click",()=>{
    calculate();
    updateScreen(currentNumber);
})

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);

    })
})

numbers.forEach((number) =>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })
})

const calculatorScreen = document.querySelector('.calculator-layar');

const updateScreen = (angka)=>{
    calculatorScreen.value = angka;
}
const inputNumber = (angka)=>{
    if(currentNumber === '0'){
        currentNumber = angka;
    }else{
        currentNumber += angka;
    }
}
const inputOperator = (operator)=>{
    if(calculationOperator.includes(operator))return;
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
}
const calculate = ()=>{
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
    
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}
const clearAll = ()=>{
    prevNumber = "";
    currentNumber = "0";
    calculationOperator = "";
}
const inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber +=dot;
}
// const operatorPersen = ()=>{
//     currentNumber /= 100;
// }