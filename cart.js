// cart.js
// Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:
//
// 1. addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
// 2. getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
// 3. getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
// 4. getCount – возвращает количество товаров в корзине

// Implement and export the default Cart class, which is a shopping cart. Interface:

// 1. addItem(item, count) - adds items and their quantity to the cart. A product is an object that has two properties: name - name and price - cost.
// 2. getItems - returns items in the format [{ item, count }, { item, count }, ...]
// 3. getCost - Returns the cost of the cart. The total cost of the basket is calculated as the cost of all added products, taking into account their quantity.
// 4. getCount - returns the number of items in the cart
    
class Cart {
    constructor() {
        this.totalCost = 0;
        this.items = [];
        this.count = 0;
    }
    addItem(item, count) {
        this.items.push({item, count});
        this.totalCost += item.price * count;
        this.count += count;
    }
    getCost() {
        return this.totalCost;
    }
    getCount() {
        return this.count;
    }
    getItems() {
        return this.items;
    }
}
