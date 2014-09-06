/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var parse = require("esprima").parse;
var wrap = require("../").wrapAnonymousFunction;
var generate = function (ast) {
    // minify
    return require("escodegen").generate(ast, {
        format: {
            renumber: true,
            hexadecimal: true,
            escapeless: true,
            compact: true,
            semicolons: false,
            parentheses: false
        }
    });
};
describe("wrapAnonymousFunction-test", function () {
    it("should wrap anonymous function around ast", function () {
        var code = "var a = 1";
        var ast = parse(code);
        var wrappedAST = wrap(ast);
        assert.equal(generate(wrappedAST), "(function(){var a=1}())");
    });
});