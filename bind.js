//bind.js
// Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn)

// Implement and export by default a function that behaves like the builtin bind(obj, fn)

const bind = (obj, fn) => {
    return function(...numbers) {
        if(numbers.length > 1) {
            return fn.apply(obj, numbers)
        }
        return fn.call(obj, ...numbers)
    }
}