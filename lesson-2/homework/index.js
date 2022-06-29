// TASK 1
let a = 0.1;
let b = 0.2;
let c = a + b;
let calcOut = document.querySelector('.calc-out-1');

calcOut.innerHTML = c.toFixed(1);

// TASK 2
let d = '1';
let e = 2;
let f = +d + +e; // до змінної Е додав + для того, якщо користувач введе стрінгове значення
let calcOut2 = document.querySelector('.calc-out-2');

calcOut2.innerHTML = f;

// TASK 3
const gb = 1024;
const file = 820;
let flashInp = document.querySelector('.flash-inp');
let flashBtn = document.querySelector('.flash-btn');
let flashOut = document.querySelector('.flash-out');

flashBtn.onclick = () => {
    flashOut.innerHTML = Math.round(flashInp.value * gb / file);
}

// Task 4 - Grocery calc
let walletInp = document.querySelector('.wallet-inp');
let chocoInp = document.querySelector('.choco-inp');
let grocBtn = document.querySelector('.grocery-btn');
let chocoOut = document.querySelector('.choco-out');

grocBtn.onclick = () => {
    chocoOut.innerHTML = 'You will get ' + (Math.round(walletInp.value / chocoInp.value)) + ' chocolates. And your remaining is ' + (walletInp.value % chocoInp.value);
}

