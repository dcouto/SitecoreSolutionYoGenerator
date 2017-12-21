'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {}

    prompting() {
        this.log("Welcome to to the Sitecore Solution Generator!");
    }

    configuring() {}

    writing() {
    }

    conflicts() {}

    install() {}

    end() {}
};