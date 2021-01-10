// ДЗ 4.1
let obj ={};

function makeObjectFromNumber(number) {
    if (number.length < 3) {
        while (number.length < 3) {
            number = '0' + number;
        }
    }
    
    obj = {'единицы': number[2], 'десятки': number[1], 'сотни': number[0]};
    return obj;
}

let n = prompt('Задайте число от 0 до 999');

if (n < 0 || n > 999) {
    console.log('Задано некорректное число');
    console.log(obj);
} else {
    console.log(makeObjectFromNumber(n));
}

// ДЗ 4.2

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

// ДЗ 4.3

let good00001 = {
    good: 'рубашка',
    desc: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
    catalog: 'мужская одежда',
    category: 'рубашки',
    materal: 'хлопок',
    designer: 'Карден',
    possibleColor: ['белый', 'синий', 'серый', 'бежевый', 'желтый', 'красный'],
    possibleSize: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
    price: 1700,
    quantity: 5
}