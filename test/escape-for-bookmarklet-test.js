/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var escapeCode = require("../").escapeCode;
describe("escape-for-bookmarklet-test", function () {
    it("should escape specialCharacters", function () {
        assert.equal(escapeCode("%X<>X?X%"), "%25X%3C%3EX%3FX%25");
    });
    it("should not no-problem character in URL", function () {
        assert.equal(escapeCode("a-zXX吉野家"), "a-zXX吉野家");
    })
});