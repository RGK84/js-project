// ДЗ 4.3

const basket1 = {
    goods: [
        {
            title: 'рубашка',
            price: 1700,
            quantity: 5
        },
        {
            title: 'брюки',
            price: 3000,
            quantity: 2
        },
        {
            title: 'свитер',
            price: 2000,
            quantity: 1
        },
        {
            title: 'галстук',
            price: 1000,
            quantity: 3
        },
        {
            title: 'ремень',
            price: 1200,
            quantity: 2
        },
    ],
    countBasketPrice () {
        return this.goods.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    goodsCount() {
        return this.goods.length;
    }
};

console.log(basket1.countBasketPrice());
console.log(basket1.goodsCount());


// ДЗ 5.1 - 5.2

const columnName = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const chessfigures = [
    ['R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p','p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p','p'],
    ['R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R']
]

function makeChessBoard() {
    let html = '<table>';
    let color ='';
    for (let y = 1; y <= 8; y++) {
        html += '<tr>';
        html += '<td class="white">' + y + '</td>';
        for (let x = 1; x <= 8; x++) {
            if ((x + y) % 2 === 0) {
                color = '"white"';
            } else {
                color = '"black"';
            }
            html += '<td class=' + color + '>' + chessfigures[y-1][x-1] + '</td>'
        }
        html += '</tr>';
    }
    html += '<tr>';
    for (let x = 0; x <= 8; x++) {
            html += '<td class="white">' + columnName[x] + '</td>';
        }
    html += '</tr>';
    html += '</table>';
    document.getElementById('chess-container').innerHTML = html;
}

makeChessBoard()


// ДЗ 5.3

const basket = {
    goods: [
        {
            title: 'рубашка',
            price: 1700,
            quantity: 5
        },
        {
            title: 'брюки',
            price: 3000,
            quantity: 2
        },
        {
            title: 'свитер',
            price: 2000,
            quantity: 1
        },
        {
            title: 'галстук',
            price: 1000,
            quantity: 3
        },
        {
            title: 'ремень',
            price: 1200,
            quantity: 2
        },
    ],
    countBasketPrice () {
        return this.goods.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    goodsCount() {
        return this.goods.length;
    },
    renderBasket() {
        let basketText = document.createElement('p');
        if (this.goods.length > 0) {
            basketText.innerHTML = '<b>В корзине</b>: ' + this.goodsCount() + ' товаров на сумму ' + this.countBasketPrice() + ' рублей';
        } else {
            basketText.innerHTML = '<b>Корзина пуста</b>';
        }
        return document.querySelector('#basket-container').appendChild(basketText);
    }
};

basket.renderBasket();


// ДЗ 5.4

const product = [
    {
        id: '00001',
        name: 'рубашка',
        desc: 'Рубашка из микровельвета - стильное решение для повседневного гардероба.',
        catalog: 'мужская одежда',
        category: 'рубашки',
        materal: 'хлопок',
        designer: 'Карден',
        color: 'белый',
        size: 'l',
        price: 1700
    },
    {
        id: '00002',
        name: 'брюки-чиносы',
        desc: 'Брюки зауженного силуэта отлично подчеркивают фигуру. Их пояс растягивается до 3 см благодаря специальной конструкции.',
        catalog: 'мужская одежда',
        category: 'брюки',
        materal: 'хлопок',
        designer: 'Карден',
        color: 'серый',
        size: 'l',
        price: 3000
    },
    {
        id: '00003',
        name: 'свитер',
        desc: 'Уютный свитер подойдет для создания образов в повседневном стиле.',
        catalog: 'мужская одежда',
        category: 'свитера и пулловеры',
        materal: 'шерсть',
        designer: 'Юдашкин',
        color: 'коричневый',
        size: 'l',
        price: 2000
    },
    {
        id: '00004',
        name: 'галстук',
        desc: 'Галстук разбавит повседневный деловой образ с костюмом.',
        catalog: 'аксессуары',
        category: 'галстуки',
        materal: 'шелк',
        designer: 'Юдашкин',
        color: 'синий',
        size: 'l',
        price: 1000
    },
    {
        id: '00005',
        name: 'ремень',
        desc: 'Ремень выполнен из натуральной кожи – долговечного материала, характеризующегося высокой износостойкостью.',
        catalog: 'аксессуары',
        category: 'ремни',
        materal: 'кожа',
        designer: 'Карден',
        color: 'коричневый',
        size: 'l',
        price: 1200
    }
];

const catalogItem = {
    renderCatalog(item) {
        return `<div class="catalog__item">
                    <div><b>Наименование</b>: ${item.name}</div>
                    <div><b>Артикул</b>: ${item.id}</div>
                    <div><b>Описание</b>: ${item.desc}</div>
                    <div><b>Материал</b>: ${item.materal}</div>
                    <div><b>Дизайнер</b>: ${item.designer}</div>
                    <div><b>Цвет</b>: ${item.color}</div>
                    <div><b>Размер</b>: ${item.size}</div>
                    <div><b>Цена</b>: ${item.price}</div>
                </div>`;
    }
}

const catalog = {
    product,
    catalogItem (product) {
        return `<div><b>Наименование</b>: ${product.name}</div>
                <div><b>Артикул</b>: ${product.id}</div>
                <div><b>Описание</b>: ${product.desc}</div>
                <div><b>Материал</b>: ${product.materal}</div>
                <div><b>Дизайнер</b>: ${product.designer}</div>
                <div><b>Цвет</b>: ${product.color}</div>
                <div><b>Размер</b>: ${product.size}</div>
                <div><b>Цена</b>: ${product.price}</div>`;
    },
    render() {
        if (product) {
            let newHeader = document.createElement('h1');
            newHeader.innerHTML = 'Каталог товаров';
            document.querySelector('#catalog').appendChild(newHeader);
        }
        product.forEach(item => {
            let newDiv = document.createElement('div');
            newDiv.className = "catalog__item";
            newDiv.innerHTML = this.catalogItem(item);
            return document.querySelector('#catalog').appendChild(newDiv);
        });
    }
};

catalog.render();