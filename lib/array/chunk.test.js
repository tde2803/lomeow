import { assert, load } from "../../tests/helpers.js";
import chunk from "./chunk.js";

const tests = [
    () => {
        assert(chunk, load([['a', 'b'], ['c', 'd']]), load(['a', 'b', 'c', 'd'], 2));
    },
    () => {
        assert(chunk, load([['a', 'b', 'c'], ['d']]), load(['a', 'b', 'c', 'd'], 3));
    },
    () => {
        assert(chunk, load([['a', 'b', 'c', 'd']]), load(['a', 'b', 'c', 'd'], 4));
    },
    () => {
        assert(chunk, load([[]]), load([], 5));
    },
];

export default tests;
