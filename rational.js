// rational.js
// Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число. 
// Рациональное число должно быть представлено объектом со следующими методами:
//
// Сеттер setNumer() - устанавливает числитель
// Сеттер setDenom() - устанавливает знаменатель
// Геттер getNumer() - возвращает числитель
// Геттер getDenom() - возвращает знаменатель
// Геттер toString() - возвращает строковое представление числа
// Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)

// Implement and export by default a function that produces a rational number.
// A rational number must be represented by an object with the following methods:
//
// Setter setNumer() - sets the numerator
// Setter setDenom() - sets the denominator
// Getter getNumer() - returns the numerator
// Getter getDenom() - returns the denominator
// Getter toString() - returns a string representation of a number
// Add() method - adds the fraction on which it was called with the passed fraction and returns a new rational number (does not change the current one!)


export const make = (a = 0, b = 0) => ({
    number1: a,
    number2: b,
    res: `${a}/${b}`,

    setNumer(n) {this.number1 = n},
    setDenom(n) {this.number2 = n},
    getNumer() {return this.number1},
    getDenom() {return this.number2},
    toString () { return this.res },
    add (denom) {
        const [c, d] = [denom.number1, denom.number2];
        this.res = `${(this.number1 * d + this.number2 * c)}/${this.number2 * d}`
        return make(this.number1 * d + this.number2 * c, this.number2 * d)
    }

})