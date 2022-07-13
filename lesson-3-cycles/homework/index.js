// MINIMUM
// Task 1
let userAge = document.querySelector('.user-age');
let ageBtn = document.querySelector('.age-btn');
let ageOut = document.querySelector('.age-out');

ageBtn.onclick = () => {
    if (userAge.value >= 0 && userAge.value <= 11) {
        ageOut.innerHTML = 'You are a kid';
    } else if (userAge.value >= 12 && userAge.value <= 17) {
        ageOut.innerHTML = 'You are a teenager';
    } else if (userAge.value >= 18 && userAge.value <= 59) {
        ageOut.innerHTML = 'You are an adult';
    } else if (userAge.value >= 60 && userAge.value <= 100) {
        ageOut.innerHTML = 'You are retired';
    } else {
        ageOut.innerHTML = 'Wow who are you?';
    }
}

// Task 2
let symbolInp = document.querySelector('.symbol-inp');
let symbolBtn = document.querySelector('.symbol-btn');
let symbolOut = document.querySelector('.symbol-out');
let symbol;

symbolBtn.onclick = () => {
    switch (symbolInp.value) {
        case '0':
            symbol = ')';
            break;
        
        case '1':
            symbol = '!';
            break;
        
        case '2':
            symbol = '@';
            break;

        case '3':
            symbol = '#';
            break;

        case '4':
            symbol = '$';
            break;

        case '5':
            symbol = '%';
            break;

        case '6':
            symbol = '^';
            break;

        case '7':
            symbol = '&';
            break;

        case '8':
            symbol = '*';
            break;

        case '9':
            symbol = '(';
            break;

        default:
            symbol = 'Enter a number from 0 to 9';
            break;
    }
    symbolOut.innerHTML = 'Your symbol is ' + `${symbol}`;
}

// Task 3
let numInp1 = document.querySelector('.number-inp1');
let numInp2 = document.querySelector('.number-inp2');
let numBtn = document.querySelector('.number-btn');
let numOut = document.querySelector('.number-out');

numBtn.onclick = () => {
    let sum = 0;
    for (let i = +numInp1.value; i <= +numInp2.value; i++) {
        sum += i; 
    }
    numOut.innerHTML = `The sum of all numbers from ${numInp1.value} to ${numInp2.value} is ${sum}`;
}

// Task 4
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let maxBtn = document.querySelector('.max-divider');

function maxDiv () {
    let out = '';
    a = Math.abs(num1.value)
    b = Math.abs(num2.value)

    for (let i = 1; i <= a && i <= b; i++) {

        if( a % i == 0 && b % i == 0) {
            out = i;
        }
    }

    document.querySelector('.max-div-out').innerHTML = out;
}

maxBtn.onclick = maxDiv;


// Task 5
let allDivInp = document.querySelector('.all-dividers-inp');
let allDivBtn = document.querySelector('.all-dividers-btn');


function allDividers () {
    let out = '';
    for (let i = 1; i <= allDivInp.value; i++) {
        if(allDivInp.value % i == 0){
            out += i + ' ';
        }
    }

    document.querySelector('.out-all-dividers').innerHTML = `Here are all dividers: ${out}`;
}
allDivBtn.onclick = allDividers;