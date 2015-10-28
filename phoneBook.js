'use strict';
var phoneBook = [];

module.exports.add = function add(name, phone, email) {
    var phonePattern =
    /^(((\+7|7)|(\+\d{2}))\s?)?(\(\d{3}\)|\d{3})\s?\d{3}[\-|\s]?\d[\-|\s]?\d{3}$/;
    var emailPattern = /^[a-zA-zа-яА-Я\d\-\.]+\@[a-zA-zа-яА-Я\-]+(\.[a-zA-zа-яА-Я]+)+$/;
    var emptyStringPattern = /^\s*$/;
    var nameIsValid = (typeof name == 'string') && !emptyStringPattern.test(name);
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

module.exports.find = function find(query) {
    var searchResult = search(query);
    if (searchResult === false) {
        printPhoneBookRecord('all');
    } else {
        printPhoneBookRecord(searchResult);
    }
};

function search(query) {
    if (!query) {
        return false;
    } else {
        var postionsArray = [];
        for (var i = 0; i < phoneBook.length; i++) {
            for (var key in phoneBook[i]) {
                if (phoneBook[i][key].indexOf(query) >= 0) {
                    postionsArray.push(i);
                }
            }
        }
        return postionsArray;
    }
}

function printPhoneBookRecord(recordsToPrint) {
    if (recordsToPrint === 'all') {
        for (i = 0; i < phoneBook.length; i++) {
            var output = '';
            for (var key in phoneBook[i]) {
                if (output != '') {
                    output += '\, ';
                }
                output += phoneBook[i][key];
            }
            console.log(output);
        }
    } else {
        for (var i = 0; i < recordsToPrint.length; i++) {
            var output = '';
            for (var key in phoneBook[recordsToPrint[i]]) {
                if (output != '') {
                    output += '\, ';
                }
                output += phoneBook[recordsToPrint[i]][key];
            }
            console.log(output);
        }
    }
}

module.exports.remove = function remove(query) {
    var searchResult = search(query);
    if (searchResult !== false) {
        var positionsToRemove = searchResult.slice();
        for (var i = 0; i < searchResult.length; i++) {
            var removingPosition = positionsToRemove.shift();
            if (removingPosition === 0) {
                phoneBook.shift();
            } else if (removingPosition === phoneBook.length) {
                phoneBook.pop();
            } else {
                phoneBook.splice(removingPosition, 1);
            }
            for (var j = 0; j < positionsToRemove.length; j++) {
                positionsToRemove[j]--;
            }
        }
        console.log('Удалено контактов: ' + searchResult.length);
    }
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
