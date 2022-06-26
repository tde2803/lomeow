import chunkTests from "../lib/array/chunk.test.js";
import compactTests from "../lib/array/compact.test.js";

[
    ...chunkTests,
    ...compactTests,
].forEach(test => {
    test();
});
