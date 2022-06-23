import { checkFunctionArgumentType } from "../../utils/errors.js";

function chunk(array, size = 1) {
    checkFunctionArgumentType(array, '[object Array]', 1);
    checkFunctionArgumentType(size, '[object Number]', 2);
    if ((size < 1) || (size % 1 !== 0)) {
        throw new RangeError('Size argument must be a positive integer!');
    }

    const result = array.reduce(
        (result, currentValue, index) => index % size === 0
            ? [...result, [currentValue]]
            : [...result.slice(0, -1), [...result[result.length - 1], currentValue]],
        []
    );

    if (result.length === 0) {
        return [[]];
    }
    return result;
}

export default chunk;
