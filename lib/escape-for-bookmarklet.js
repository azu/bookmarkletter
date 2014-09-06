/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var specialCharacters = ['%', '"', '<', '>', '#', '@', ' ', '\\&', '\\?'];
function escapeCode(code) {
    var assignCode = code;
    specialCharacters.forEach(function (char) {
        var charRegex = new RegExp(char, 'g');
        assignCode = assignCode.replace(charRegex, encodeURIComponent(char.replace(/\\/g, '')));
    });
    return assignCode;
}
module.exports = escapeCode;