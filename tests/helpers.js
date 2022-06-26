export function load() {
    return JSON.stringify([...arguments]);
}

const parse = JSON.parse;

export function assert(func, expectedResult, args = '[]') {
    const functionName = func.name || 'UNKNOWN';

    let isPassed = false;
    if (load(func(...parse(args))) === expectedResult) {
        isPassed = true;
    }

    const print = isPassed ? console.info : console.error;
    print(`${isPassed ? "OK" : "ERR"} | Function ${functionName} | Arguments ${args}`);
}
