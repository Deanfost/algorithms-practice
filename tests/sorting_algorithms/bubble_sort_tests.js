const testTools = require("../tools.js");
const bubbleSort = require("../../sorting_algorithms/bubble_sort");

/**
 * Runs tests defined inside of the function. Returns dictionary containing test results.
 * Note: Bubble Sort is IN-PLACE.
 * @returns {{string: testTools.Result, string: [number], string: [number]}}
 */
function runTests() {
    const tests = {
        "test_random": testTools.list1.slice(), 
        "test_ascending": testTools.list2.slice(), 
        "test_descending": testTools.list3.slice(), 
        "test_decimals": testTools.list4.slice(), 
        "test_true_random": testTools.getRandomList(1000)
    };

    let results = {};
    for (let testKey in tests) {
        let originalInput = tests[testKey].slice();
        bubbleSort(tests[testKey]);
        results[testKey] = {
            grade: testTools.testResult(testKey, tests[testKey]), 
            input: originalInput, 
            output: tests[testKey]
        };
    }
    return results;
}

module.exports = {runTests: runTests};