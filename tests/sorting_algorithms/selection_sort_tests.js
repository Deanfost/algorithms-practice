const testTools = require("../tools.js");
const selectionSort = require("../../sorting_algorithms/selection_sort.js");

/**
 * Runs tests defined inside of the function. Returns dictionary containing test results.
 * Note: Selection Sort is IN-PLACE.
 * @returns {number}
 */
function runTests() {
    const tests = {
        "test_random": testTools.list1.slice(), 
        "test_ascending": testTools.list2.slice(), 
        "test_descending": testTools.list3.slice(), 
        "test_decimals": testTools.list4.slice()
    };
    
    let results = {};
    for (let testKey in tests) {
        selectionSort(tests[testKey]);
        if (testTools.testAscending(tests[testKey])) {
            results[testKey] = testTools.result.PASS;
            console.log(testKey + ": " + "PASSED ✓");
        } else {
            results[testKey] = testTools.result.FAIL;
            console.log(testKey + ": " + "FAILED ✗");
        }
    }
    return results;
}

module.exports = {runTests: runTests};