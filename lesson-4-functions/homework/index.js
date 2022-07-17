// Напиши всі можливі варіанти створення функцій.
let f1 = () => {
    document.querySelector('.out-1').innerHTML = 'Hello world'
}
f1()

function f1_1 () {
    document.querySelector('.out-1-1').innerHTML = 'Hello Igor'
}
f1_1()

let f1_2 = function () {
    document.querySelector('.out-1-2').innerHTML = 'Hello there'
}
f1_2()



//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function f2 (a, b, c) {
    document.querySelector('.out-2').innerHTML = f2.length
}
f2()


// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
let inp3 = document.querySelector('.i-3-1');
let inp3_1 = document.querySelector('.i-3-2');

function f3 () {
    let out = '';

    if (inp3.value < inp3_1.value) {
        out = -1
    } else if (inp3.value > inp3_1.value) {
        out = 1
    } else {
        out = 0
    }
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.btn-3').onclick = f3;


//Напиши функцію, яка обчислює факторіал переданого їй числа.
function f4 () {
    let i = document.querySelector('.i-4').value;
    let out = ''

    out = i ? i * (i - 1) : 1;
    document.querySelector('.out-4').innerHTML = out;
}
document.querySelector('.btn-4').onclick = f4;


//
