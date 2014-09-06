/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var parse = require("esprima").parse;
var mangle = require("esmangle").mangle;
var generate = require("escodegen").generate;
var escapeCode = require("./escape-for-bookmarklet");
var merge = require("lodash.merge");

/**
 * prefix bookmarklet
 * @type {string}
 */
var javascriptProtocol = "javascript:";

var DEFAULT_OPTIONS = {
    // @type {string} prefix string of compiled code
    // Default : `javascript:`
    "prefix-string": javascriptProtocol,
    // @type {boolean} Add IIFE wrapper, if true
    // Default : `true`
    "wrap-anonymous-function": true
};
/**
 * convert source code to bookmarklets
 * @param {string} content source-code
 * @param {?DEFAULT_OPTIONS} options
 * @returns {*}
 */
function bookmarkletter(content, options) {
    /**
     * @type {option}
     */
    var useOptions = merge(DEFAULT_OPTIONS, options || {});
    var ast = parse(content);
    var minifiedAST = mangle(ast);
    if (useOptions["wrap-anonymous-function"]) {
        minifiedAST = require("./wrap-anonymous-ast")(minifiedAST);
    }
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
    var escapedCode = escapeCode(minifiedCode);
    return useOptions["prefix-string"] + escapedCode;

}
module.exports = bookmarkletter;