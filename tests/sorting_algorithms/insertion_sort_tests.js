const testTools = require("../tools.js");
const insertionSort = require("../../sorting_algorithms/insertion_sort.js");

/**
 * Runs tests defined inside of the function. Returns dictionary containing test results.
 * Note: Insertion Sort is IN-PLACE.
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
        insertionSort(tests[testKey]);
        results[testKey] = {
            grade: testTools.testSortingResult(testKey, tests[testKey]), 
            input: originalInput, 
            output: tests[testKey]
        };
    }
    return results;
}

module.exports = {runTests: runTests};