const testTools = require("../tools.js");
const bucketSort = require("../../sorting_algorithms/bucket_sort.js");

/**
 * Runs tests defined inside of the function. Returns dictionary containing test results.
 * Note: Bucket Sort is OUT-OF-PLACE.
 * @returns {{string: testTools.Result, string: [number], string: [number]}}
 */
function runTests() {
    const tests = {
        "test_random": testTools.list4, 
        "test_ascending": testTools.list5, 
        "test_descending": testTools.list6, 
        "test_true_random": testTools.getRandomList(1)
    };
    
    let results = {};
    for (let testKey in tests) {
        let output = bucketSort(tests[testKey]);
        results[testKey] = {
            grade: testTools.testSortingResult(testKey, output), 
            input: tests[testKey], 
            output: output
        };
    }
    return results;
}

module.exports = {runTests: runTests};