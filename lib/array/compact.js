import { checkFunctionArgumentType } from "../../utils/errors.js";

function compact(array) {
    checkFunctionArgumentType(array, '[object Array]');

    return array.filter(item => ![false, null, 0, '', undefined, NaN].includes(item));
}

export default compact;
