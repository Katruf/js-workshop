(function ()
{
    'use strict';

    // array - tablice
    var names = ['Jack', 'Stephan', 'Ala'];
    var numbers = [1, 2, 3];

    // push - dodawanie elementu do tablicy (na koniec)
    console.log('add element to end of array');
    console.log(names);
    names.push('John');
    console.log(names);

    // pop - usuwanie ostatniego elementu
    console.log('remove last element from array');
    names.pop();
    console.log(names);

    // unshift - dodawanie elementu do tablicy (na poczatek)
    console.log('add element to begin of array');
    console.log(names);
    names.unshift('John');
    console.log(names);

    // shift - usuwanie pierwszego elementu
    console.log('remove first element from array');
    names.shift();
    console.log(names);

    // length - dlugosc tablicy
    console.log('lenght');
    console.log(numbers.length);

    // tablice asocjacyjne - tablice ktorych index jest stringiem
    console.log('associative array');
    var tab = [];
    tab['john'] = 'john@gmail.com';
    tab['jack'] = 'jack@gmail.com';

    for (var person in tab) {
        console.log( person + ' ' + tab[person]);
    }

    // join() - ��czenie elementow tablicy
    console.log('join function()');
    console.log(numbers.join());
    console.log(numbers.join('-'));

    // reverse() - odwracanie kolejno�ci element�w w talbicy
    console.log('reverse function()');
    console.log(numbers);
    console.log(numbers.reverse(''));

    // sort() - sortowanie element�w
    console.log('sort function()');
    console.log(names);
    console.log(names.sort());


})();