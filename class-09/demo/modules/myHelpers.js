'use strict';



let helpersN = {};
helpersN.randomNumberBetween = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

helpersN.msg = 'hello world';

module.exports = helpersN;