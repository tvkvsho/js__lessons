// Good Names
let name;
let name2;
let goodName;
let down_Exeption;
let $name;
let _name;


// Bad names
/*

let nameone;   --Ця змінна не є правильною, тому що не використовує Camel Case
let Name;   --Ця змінна не є правильною, тому що за Camel Case ми не використовуємо імена змінних які починаються з великої літери;
let lalala;   --Змінна не правильна, бо використане ім'я є без контексту, тобто треба використовувати зрозумілі імена, наприклад userName;
let !name;
let n@me;
let .name;
let name One;

*/

// What is your name
let userName = document.querySelector('.input-name');
let helloBtn = document.querySelector('.hello-btn');
let userOut = document.querySelector('.out-name');

helloBtn.onclick = () => {
    userOut.innerHTML = 'Hello' + " " + `${userName.value}`;
}


// What is your age
let userAge = document.querySelector('.input-age');
let ageBtn = document.querySelector('.age-btn');
let outAge = document.querySelector('.out-age');

ageBtn.onclick = () => {
    outAge.innerHTML = 2022 - userAge.value;
}

// Calculate rectangle perimeter
let recInp = document.querySelector('.rectangle-side');
let recBtn = document.querySelector('.rectangle-btn');
let recOut = document.querySelector('.rectangle-out');

recBtn.onclick = () => {
    recOut.innerHTML = recInp.value * 4;
}

// Calculate circle square
let circInp = document.querySelector('.circle-radius');
let circBtn = document.querySelector('.circle-btn');
let circOut = document.querySelector('.circle-out');

circBtn.onclick = () => {
    circOut.innerHTML = 3.14 * (circInp.value * circInp.value);
}

// Calculate speed
let distInp = document.querySelector('.dist-inp');
let timeInp = document.querySelector('.time-inp');
let speedBtn = document.querySelector('.speed-btn');
let speedOut = document.querySelector('.speed-out');

speedBtn.onclick = () => {
    speedOut.innerHTML = distInp.value / timeInp.value + ' km/h';
}

// USD to EUR converter
const eur = 0.95;
let usdInp = document.querySelector('.usd-inp');
let convBtn = document.querySelector('.usd-convert');
let convOut = document.querySelector('.converter-out');

convBtn.onclick = () => {
    convOut.innerHTML = usdInp.value * eur;
}
