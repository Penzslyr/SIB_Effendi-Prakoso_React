const calculatorDisplay = document.querySelector('h1');
//const historyDisplay = document.querySelector('h2');
const inputBtns = document.querySelectorAll('button');
const clearEntryBtn = document.getElementById('clear-entry');
const allClearBtn = document.getElementById('all-clear');


let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

// mengirim value jika number di klik
function sendNumberValue(number){
    
    //mengubah tampilan value jika sudah ada value pertama yang dimasukan
    //jika value pertama sudah ada (diketahui dari variabel awaitingNextVaue) maka akan men display number yang di klik
    if(awaitingNextValue){
        calculatorDisplay.textContent = number;
        awaitingNextValue = false
    }else{
        //jika valuenya masih 0, kita replace jika tidak kita tambahkan nomernya
        const displayValue = calculatorDisplay.textContent;
        //const historyValue = historyDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
        //historyDisplay.textContent = historyValue === '0' ? number : historyValue + number;
    }
}

//menjumlahkan first dan second value tergantung operatornya
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
   //fix bug operator dpt di klik  berkali kali dan menghasilkan NaN
   if(operatorValue&&awaitingNextValue) {
        operatorValue = operator;
        return;
   }

   //assign firstvalue jika tidak ada value
   if(!firstValue){
        firstValue = currentValue;
   }else{
        //tampil history operasi jika klik =
        if(operatorValue!=='='){
            // historyDisplay.textContent = `${firstValue}${operatorValue}${currentValue}`
            // console.log(operatorValue);
            const calculation = calculate[operatorValue](firstValue, currentValue);
            calculatorDisplay.textContent = `${firstValue}${operatorValue}${currentValue}=${calculation}`;
            firstValue = calculation;
        }
        
        // const calculation = calculate[operatorValue](firstValue, currentValue);
        // calculatorDisplay.textContent = `${firstValue}${operatorValue}${currentValue}=${calculation}`;
        // firstValue = calculation;
   }
   // menyimpan value berikutnya dan operatornya
   awaitingNextValue = true;
   operatorValue = operator;
}

// menambahkan Event Listeners untuk numbers, operator, desimal buttons
inputBtns.forEach((inputBtn)=>{
    if(inputBtn.classList.length===0){
        inputBtn.addEventListener('click', ()=> sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', ()=> useOperator(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', ()=> addDecimal());
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
     //historyDisplay.textContent = 0;
    calculatorDisplay.textContent = '0';
    
}

allClearBtn.addEventListener('click', allClear);
