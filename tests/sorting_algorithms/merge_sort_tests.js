const testTools = require("../tools.js");
const mergeSort = require("../../sorting_algorithms/merge_sort.js");

/**
 * Runs tests defined inside of the function. Returns dictionary containing test results.
 * Note: Merge Sort is OUT-OF-PLACE.
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
        let output = mergeSort(tests[testKey]);
        results[testKey] = {
            grade: testTools.testResult(testKey, output), 
            input: tests[testKey], 
            output: output
        };
    }
    return results;
}

module.exports = {runTests: runTests};