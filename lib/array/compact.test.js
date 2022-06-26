import compact from "./compact.js";
import { assert, load } from "../../tests/helpers.js";

const tests = [
    () => {
        assert(compact, load([1, 2, 3]), load([0, 1, false, 2, '', 3]))
    },
    () => {
        assert(compact, load([]), load([]))
    },
    () => {
        assert(compact, load([]), load([false, NaN, '']))
    },
    () => {
        assert(compact, load([1, 2, 3]), load([1, 2, 3]))
    },
];

export default tests;
