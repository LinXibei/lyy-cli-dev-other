'use strict';

module.exports = { add, min};

function add(a, b) {
    console.log('core调用add函数', a, b);
    return a + b;
}

function min(a, b) {
    console.log('core调用min函数', a, b);
    return Math.min(a, b);
}
