const inputValue = document.querySelectorAll('.button-row')
const displayResult = document.getElementById('displayResult');


// at first select all element within button-row class, we got 5 div with 
// same class name, then apply forEach method, every item with in forEach
// method we select only input tag, we got 18 input tag, then again
// apply forEach method over all input tag, and apply event
// listner over every item on input tag.
inputValue.forEach((item) => {
    let inputItem = item.querySelectorAll('input')
    inputItem.forEach((i) => {
        i.addEventListener('click', () => {
            calculation(i.value)
        })
    })
})
// initialize all variable with empty string, before type any operator, we store the
// number on prevInput and after typing any operator, we store all number on 
// currentInput, the apply operation method and store the answer in result.
let currentInput = "";
let prevInput = "";
let result = "";
let currentOperator = "";

// store the input Number in variable
function appendNumber(num) {
    if(currentOperator) {
        currentInput += num
    } else {
        prevInput += num;
    }
}

// when we click '=', to get result, we run this function , to get the value
function appendResult(){
    
    if(currentInput && prevInput && currentOperator) {
        // convert the input string to floating number
        currentInput = parseFloat(currentInput);
        prevInput = parseFloat(prevInput);

       switch (currentOperator) {
        case '+':
            result = currentInput + prevInput;
            break;
        case '-':
            result = prevInput - currentInput;
            break;
        case '*':
            result = prevInput * currentInput;
            break;
        case '/':
            result = prevInput / currentInput;
            break;
        default:
            break;
       }

    }
    // after getting the result, again turn the all variable into empty string
    currentInput = "";
    prevInput = result;
    currentOperator = "";
}


function calculation(item) {
   
    if (isNaN(item)) {

        switch (item) {
            case '+':
               currentOperator = '+'
               displayResult.value += item
                break;
            case '-':
                currentOperator = '-'
                displayResult.value += item
                break;
            case '*':
                currentOperator = '*'
                displayResult.value += item
                break;
            case '/':
                currentOperator = '/'
                displayResult.value += item
                break;
            case '=':
               appendResult();
               showResult(result)
 
                break;
            case 'RESET':
                currentInput = "";
                prevInput = "";
                currentOperator = "";
                result = ""
                showResult(result)
                break;

            case 'DEL':
                let delItem = displayResult.value
                showResult(delItem.slice(0,delItem.length-1))
                prevInput = delItem.slice(0,delItem.length-1);
                // historyItem.push({'firstNum': prevInput})
            break;

            case '.':
                appendNumber(item)
                displayResult.value += item
                break;
            default:
                break;
        }
    } else {
        displayResult.value += item
        appendNumber(item);
    }
}

function showResult(result){
    displayResult.value = result
}



