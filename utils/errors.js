export function checkFunctionArgumentType(object, type, argPosition = 1) {
    if (Object.prototype.toString.call(object) !== type) {
        throw new TypeError(`Received argument (position ${argPosition}) is not an ${type}!`);
    }
}
