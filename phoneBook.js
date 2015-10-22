'use strict';
var phoneBook = [];

module.exports.add = function add(name, phone, email) {
    var phonePattern =
    /^(((\+7|7)|(\+\d{2}))\s?)?(\(\d{3}\)|\d{3})\s?\d{3}[\-|\s]?\d[\-|\s]?\d{3}$/;
    var emailPattern = /^[a-zA-zа-яА-Я]+\@[a-zA-zа-яА-Я]+(\.[a-zA-zа-яА-Я]+)+$/;
    var nameIsValid = (typeof name == 'string');
    var phoneIsValid = phonePattern.test(phone);
    var emailIsValid = emailPattern.test(email);
    var argumentsIsValid = nameIsValid && phoneIsValid && emailIsValid;
    if (argumentsIsValid) {
        phoneBook.push({
            name: name,
            phone: phone,
            email: email
        });
    }
    return argumentsIsValid;
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    // Ваша удивительная магия здесь

};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {

    // Ваша необьяснимая магия здесь

};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};
