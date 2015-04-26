(function ()
{
    'use strict';
    window.partThree = {

        //(6)U�ywaj�c funkcji map() odejmij od ka�dego elementu tablicy [10,12,7,45,23,99,17] jego po�ow�.

        subOneQuarter: function (tab)
        {
            tab = tab.map(function (element)
            {
                return element - (element / 2);
            });
            return tab;
        },

        //(7) Napisz funkcj�, kt�ra zwraca litery w alfabetycznej kolejno�ci
        alphabetOrder: function (str)
        {
            return str.split('').sort().join();
        }
    };
})();