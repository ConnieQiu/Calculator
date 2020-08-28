let currentValue;
let arrayOfNums = [];
let finalNumberArray = [];

function add(nums){
    let arguments = [...nums];
    let sum;
    if(arrayOfNums.length === 2){
        sum = arguments[arguments.length - 1] + arguments[arguments.length - 2];
        finalNumberArray.push(sum);
    }else if(arrayOfNums.length > 2){
        sum = finalNumberArray[finalNumberArray.length - 1] + arguments[arguments.length - 1];
        finalNumberArray.push(sum);
    }
    return sum;
}

function subtract(nums){
    let arguments = [...nums];
    let subtracted;
    if(arrayOfNums.length === 2){
        subtracted = arguments[arguments.length - 2] - arguments[arguments.length - 1];
    }else if(arrayOfNums.length > 2){
        subtracted = finalNumberArray[finalNumberArray.length - 1] - arguments[arguments.length - 1];
    }
    finalNumberArray.push(subtracted);
    return subtracted;
}

function multiply(nums){
    let arguments = [...nums];
    let multiplied;
    if(arrayOfNums.length === 2){
        multiplied = arrayOfNums[arrayOfNums.length - 2] * arrayOfNums[arrayOfNums.length - 1];
    }else if(arrayOfNums.length > 2){
        multiplied = finalNumberArray[finalNumberArray.length - 1] * arguments[arguments.length - 1];
    }
    finalNumberArray.push(multiplied);
    return multiplied;
}

function divide(nums){
    let arguments = [...nums];
    let divided;
    if(arrayOfNums.length === 2){
        divided = arrayOfNums[arrayOfNums.length - 2] / arrayOfNums[arrayOfNums.length - 1];
    }else if(arrayOfNums.length > 2){
        divided = finalNumberArray[finalNumberArray.length - 1] / arguments[arguments.length -1];
    } 
    finalNumberArray.push(divided);
    return divided;
}

function operate(operator,nums){
   if(operator === "+"){
        return add(nums);
   }else if(operator === "-"){
        return subtract(nums);
   }else if(operator === "*"){
        return multiply(nums);
   }else if(operator === "/"){
        return divide(nums);
   }
}

//display panel
let display = document.getElementById("display-panel-paragraph");
let numberButtons = [...document.querySelectorAll(".number-buttons")];
let displayNumber = numberButtons.textContent;
let previousDisplay = document.getElementById("previous-numbers-display");
let clickCounter = 0;
let operatorsArray = [];

numberButtons.forEach(function(el){
    el.addEventListener("click", function(){
        let number = el.textContent;
        currentValue = display.textContent += number;
        clickCounter = 0;
    })
});

//when operator is clicked, pushes currentValue into arrayOfNums
let operationButtons = document.querySelectorAll(".operator-buttons");
operationButtons.forEach(function(el){
    el.addEventListener("click", function(){
        let finalNumber;
        let previousOperator;
        operatorsArray.push(el.textContent);
        let currentOperator = operatorsArray[operatorsArray.length - 1];
        if(operatorsArray.length === 1){
            previousOperator = currentOperator;
        }else{
            previousOperator = operatorsArray[operatorsArray.length - 2];
        }
        if(clickCounter === 0){
            display.textContent = "";
            previousDisplay.textContent += " " + currentValue + " " + el.textContent;
            arrayOfNums.push(Number(currentValue));
            clickCounter++;
        }else if(clickCounter > 0){
            previousDisplay.textContent = previousDisplay.textContent;
            clickCounter++

        }
        if(arrayOfNums.length > 1 && clickCounter < 2){
        if(previousOperator === "+"){
            finalNumber = operate("+", arrayOfNums);
        }else if(previousOperator === "-" === true){
            finalNumber = operate("-", arrayOfNums);
        }else if(previousOperator === "*" === true){
            finalNumber = operate("*", arrayOfNums);
        }else if(previousOperator === "/" === true){
            finalNumber = operate("/", arrayOfNums);
        }
    }
    displayResult();
        console.log(finalNumber);
        console.log(finalNumberArray);
        console.log(arrayOfNums);
    })
})

function displayResult(){
    display.textContent = finalNumberArray[finalNumberArray.length - 1];
}

function clearDisplay(){
    display.textContent = "";
}

let equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener("click", function(){
    arrayOfNums.push(currentValue);
    operate();
})
//clear button
let clearAllButton = document.getElementById("clear-button");
clearAllButton.addEventListener("click",function(){
    display.textContent = "";
    currentValue = "";
    arrayOfNums = [];
    operatorsArray = [];
    finalNumberArray = [];
    previousDisplay.textContent = "";
    console.log(arrayOfNums);
});






