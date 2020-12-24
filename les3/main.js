// Доп.дз из урока 2
function numberToString(a) {
    if (a > 0) {
        return String(a);
    } else {
        a = Math.abs(a);
        return '(' + a + ')'; 
    }
}

let a = +prompt('Введите число');

console.log(numberToString(a));

// ДЗ 3.1

let i = 2;

nextNum: while (i <= 100) {
    let j = 2;
    while (j < i) {
        if (i % j === 0) {
            i++;
            continue nextNum;
        }
        j++;
    }
    console.log(i);
    i++;
}

// Вариант через for лаконичней и нет задвоения кода i++

// nextNum: for (let i = 2; i <= 100; i++) {
//     for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextNum;
//     }
//     console.log(i);
//     }

// ДЗ 3.2

let basket = [
    {good: 'рубашка', price: 1700, quantity: 5},
    {good: 'брюки', price: 3000, quantity: 2,},
    {good: 'свитер', price: 2000, quantity: 1},
    {good: 'галстук', price: 1000, quantity: 3},
    {good: 'ремень', price: 1200, quantity: 2},
    {good: 'тапочки', price: 500, quantity: 1},
]

function countBasketPrice (arr) {
    return arr.reduce((total, item) => total + item.price * item.quantity, 0)
}

console.log(countBasketPrice(basket));

// ДЗ 3.3

for (let i = 0; console.log(i), i < 9; i++){};

// ДЗ 3.4

for (let i = 1, j='x'; console.log(j), i<20; j+='x', i++);