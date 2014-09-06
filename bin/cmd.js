#!/usr/bin/env node
var bookmarkletter = require('../').bookmarkletter;
var concat = require('concat-stream');
var fs = require('fs');
var file = process.argv[2];
var input = file && file !== '-'
        ? fs.createReadStream(process.argv[2])
        : process.stdin
    ;
input.pipe(concat(function (buf) {
    console.log(bookmarkletter(buf.toString('utf8')));
}));