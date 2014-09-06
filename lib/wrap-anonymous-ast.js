/**
 * Created by azu on 2014/09/06.
 * LICENSE : MIT
 */
"use strict";
var b = require("ast-types").builders;
function wrapAnonymousFunction(ast) {
    return b.program([
        b.expressionStatement(
            b.callExpression(
                b.functionExpression(null, [], b.blockStatement(ast.body))
                , [] // immediately invoke
            )
        )
    ]);
}
module.exports = wrapAnonymousFunction;