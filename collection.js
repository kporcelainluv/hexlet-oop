//collection.js
// Реализуйте и экспортируйте функцию, которая принимает на вход коллекцию объектов и колбек функцию. 
// Эта функция должна вызывать колбек для каждого объекта коллекции. Главная особенность этой функции в том, 
// что она передает объекты коллекции не в саму функцию, а устанавливает их как контекст.

// Implement and export a function that takes a collection of objects and a callback function as input.
// This function should call a callback for each collection object. The main feature of this function is
// that it does not pass collection objects to the function itself, but sets them as a context.

const each = (obj, cb) => {
    return obj.forEach( (_, index) => {
       return cb.call(obj[index])
    })
}

const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
];

each(objects, function callback() {
    this.name = this.name.split('').reverse().join('');
});

console.log(objects);