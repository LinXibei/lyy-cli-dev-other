'use strict';
const { min } = require('@lyy-cli-dev-other/core');
const utils = require("@lyy-cli-dev-other/utils");

function app() {
    console.log("app主入口");
    let minNum = min(2, 5);
    utils(minNum);
}

app();
