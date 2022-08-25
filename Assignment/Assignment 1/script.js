const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearEntryBtn = document.getElementById('clear-entry');
const allClearBtn = document.getElementById('all-clear');


let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

// Send number value when btn is clicked 
function sendNumberValue(number){
    //jika valuenya masih 0, kita replace jika tidak kita tambahkan nomernya
    //mengubah tampilan value jika sudah ada value pertama yang dimasukan
    if(awaitingNextValue){
        calculatorDisplay.textContent = number;
        awaitingNextValue = false
    }else{
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

//menjumlahkan fistt dan second value tergantung operatornya
const calculate = {
    '/': (firstNumber,secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber,secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber,secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber,secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber,secondNumber) => secondNumber,
};

const addDecimal = () => {
    //jika tombol operator ditekan, maka disable decimal
    if(awaitingNextValue) return;

    //jika tidak ada desimal maka tambahkan, jika ada maka tidak bisa
    if(!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

const useOperator = (operator) => {
   const currentValue = Number(calculatorDisplay.textContent);
   //fix bug operator berkali kali
   if(operatorValue&&awaitingNextValue) {
        operatorValue = operator;
        return;
   }

   //assign firstvalue jika tidak ada value
   if(!firstValue){
        firstValue = currentValue;
   }else{
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
   }
   // menyimpan value berikutnya dan operatornya
   awaitingNextValue = true;
   operatorValue = operator;
}

// Add Event Listeners for numbers, operator, decimal buttons
inputBtns.forEach((inputBtn)=>{
    if(inputBtn.classList.length===0){
        inputBtn.addEventListener('click', ()=> sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', ()=> useOperator(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', ()=> addDecimal());
    }
    else if(inputBtn.classList.contains('zero')){
        inputBtn.addEventListener('click', ()=> sendNumberValue(inputBtn.value));
    }
});

//clear entry function & event listener
const clearEntry = () => {
    calculatorDisplay.textContent = '0';
}

clearEntryBtn.addEventListener('click', clearEntry);

const allClear = () => {
     firstValue = 0;
     operatorValue = '';
     awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
    
}

allClearBtn.addEventListener('click', allClear);
