// Money.js
// Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты, 
// выполнять арифметические операции и форматировать вывод. Список методов:
//
// Money(value, currency = 'usd') – создает объект-деньги.
// Money.prototype.getValue() – возвращает стоимость в виде числа
// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, 
// в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода

// Implement and export the Money abstraction by default. She knows about the currency of money, allows them to be converted into other currencies,
// perform arithmetic operations and format the output. List of methods:
//
// Money(value, currency = 'usd') - creates a money object.
// Money.prototype.getValue() - Returns the value as a number
// Money.prototype.exchangeTo(currency) - returns a new money object where the value is converted to the specified currency
// Money.prototype.add(money) - returns a new money object, which is the sum of the original and transferred money,
// in the currency of the original money (internal conversion is possible if the currencies do not match)
// Money.prototype.format() - returns a localized representation of money that is convenient for display

// usd -> eur = 0.7
// eur -> usd = 1.2

const exchangeToEur = (val) => val * 1.2;
const exchangeToUsd = (val) => val * 0.7;

function Money (value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
    this.getValue = () => this.value;
    this.exchangeTo = (currency) => {
        let exchangedValue = this.value;
        if (currency !== this.currency) {
            exchangedValue = currency === 'usd' ? exchangeToEur(this.value) : exchangeToUsd(this.value);
        }
        return new Money(exchangedValue, currency);
    };
    this.add = (money) => {
        const currency = money.currency;
        let updatedMoney = money;
        
        if (currency !== this.currency){
            updatedMoney = money.exchangeTo(this.currency);
        }
        return new Money(updatedMoney.value + this.value, this.currency);
    };
    this.format = () => this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency }))
}
const money1 = new Money(100);
console.log(money1.getValue()) //.toBe(100);
console.log(money1)
console.log(money1.exchangeTo('eur').getValue())//.toBe(70);
console.log(money1)
console.log(money1.exchangeTo('usd').getValue())//.toBe(100);