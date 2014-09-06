/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var bookmarkletter = require("../").bookmarkletter;
describe("bookmarkletter-test", function () {
    it("should be mangled", function () {
        var code = "var a = 1;";
        var result = bookmarkletter(code);
        assert.equal(result, "javascript:(function(){var%20a=1}())");
    });
});