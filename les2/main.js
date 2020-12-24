let a;
let b;
let c;

// Задание 3.

a = +prompt('Задайте первое целочисленное число');
b = +prompt('Задайте второе целочисленное число');

if (a >= 0 && b >= 0) {
    c = a - b;
} else if (a < 0 && b < 0) {
    c = a * b;
} else {
    c = a + b;
}

alert(c);

// Задание 4.

a = +prompt('Задайте целочисленное число от 0 до 15, я выведу все числа от Вашего до 15');

switch (a) {
    case 0: alert(0);
    case 1: alert(1);
    case 2: alert(2);
    case 3: alert(3);
    case 4: alert(4);
    case 5: alert(5);
    case 6: alert(6);
    case 7: alert(7);
    case 8: alert(8);
    case 9: alert(9);
    case 10: alert(10);
    case 11: alert(11);
    case 12: alert(12);
    case 13: alert(13);
    case 14: alert(14);
    case 15: alert(15);
    break;
    default: alert('Неверное число')
}

// Задание 5.

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// Задание 6.

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+' : c = plus(arg1, arg2);
        return c;
        case '-' : c = minus(arg1, arg2);
        return c;
        case '*' : c = multiplication(arg1, arg2);
        return c;
        case '/' : c = division(arg1, arg2);
        return c;
    }
}

a = +prompt('Задайте первое целочисленное число');
b = +prompt('Задайте второе целочисленное число');
let d = prompt('Выберите знак операции: +, -, * или /');

if (d === '+' || d === '-' || d === '*' || d === '/') {
    alert(mathOperation(a, b, d));
} else {
    alert('Заданы некорректные данные');
}

// Задание 8.

function power(val, pow) {
    if (pow > 1) {
        val = val * power(val, pow-1);
    } 
    return val;
}

a = +prompt('Задайте число для возведения в степень');
b = +prompt('Задайте положительную целочисленную степень');

if (b < 1) {
    alert('Заданы некорректные данные');
} else {
    alert(power(a, b));
}