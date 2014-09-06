/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var parse = require("esprima").parse;
var mangle = require("esmangle").mangle;
var generate = require("escodegen").generate;
var astTypes = require("ast-types");

function bookmarkletter(content) {
    var ast = parse(content);
    var minifiedAST = mangle(ast);
    var minifiedCode = generate(minifiedAST, {
        format: {
            renumber: true,
            hexadecimal: true,
            escapeless: true,
            compact: true,
            semicolons: false,
            parentheses: false
        }
    });
    return minifiedCode;
}
module.exports = bookmarkletter;