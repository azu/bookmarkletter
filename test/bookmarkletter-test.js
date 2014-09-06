/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var bookmarkletter = require("../").bookmarkletter;
describe("bookmarkletter-test", function () {
    it("should be mangled", function () {
        console.log(bookmarkletter("var a = 1;"));
    });
});