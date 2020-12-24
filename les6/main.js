// ДЗ 6.1

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

const catalog = {
    product,
    buyButton: null,
    catalogItem (product) {
        return `<div class="catalog__item">
                    <div><b>Наименование</b>: ${product.name}</div>
                    <div><b>Артикул</b>: ${product.id}</div>
                    <div><b>Описание</b>: ${product.desc}</div>
                    <div><b>Материал</b>: ${product.materal}</div>
                    <div><b>Дизайнер</b>: ${product.designer}</div>
                    <div><b>Цвет</b>: ${product.color}</div>
                    <div><b>Размер</b>: ${product.size}</div>
                    <div><b>Цена</b>: ${product.price}</div>
                    <button class="btn-buy btn" data-id="${product.id}" data-price="${product.price}">Купить</button>
                </div>`;
    },
    render() {
        if (product) {
            let newHeader = document.createElement('h1');
            newHeader.innerHTML = 'Каталог товаров';
            document.querySelector('#catalog').appendChild(newHeader);
        }
        this.buyButton = document.querySelector('.btn-buy');
        product.forEach(item => {
            let newDiv = document.querySelector('#catalog');
            return newDiv.innerHTML += this.catalogItem(item);
        });
    }
};

catalog.render();

const basket = {
    goods: [],
    countBasketPrice () {
        return this.goods.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    goodsCount() {
        return this.goods.length;
    },
    renderBasket() {
        let basketText;
        if (document.querySelector('p')) {
            basketText = document.querySelector('p');
        } else {
            basketText = document.createElement('p');
        }
        if (this.goods.length > 0) {
            basketText.innerHTML = '<b>В корзине</b>: ' + this.goods.length + ' товаров на сумму ' + this.countBasketPrice() + ' рублей';
        } else {
            basketText.innerHTML = '<b>Корзина пуста</b>';
        }
        return document.querySelector('#basket-container').appendChild(basketText);
    },
    init() {
        document.querySelector('#catalog').addEventListener('click', (event) => {
            this.containerClickHandler(event);
        });
    },
    containerClickHandler(event) {
        if (event.target.tagName !== 'BUTTON') return;
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        this.addGoodsToBasket(id, price);
    },
    addGoodsToBasket(id, price) {
        this.goods.push({'id': id, 'price': price, 'quantity': 1});
        this.renderBasket()
    }
};

basket.renderBasket();
basket.init()