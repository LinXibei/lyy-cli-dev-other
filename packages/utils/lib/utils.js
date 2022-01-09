'use strict';
const chalk = require('chalk');
const { add } = require('@lyy-cli-dev-other/core');

module.exports = utils;

function utils(c) {
    console.log('utils的result入参', c);
    console.log(chalk.red("utils的结果为" + chalk.blue(add(c, 10))))
}
