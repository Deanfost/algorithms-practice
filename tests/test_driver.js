/**
 * Driver file for the basic project test suite. Takes results from individual test files
 * and accumlulates and prints results.
 */

const testTools = require("./tools.js");

const tests = {
    "Bubble Sort": require("./sorting_algorithms/bubble_sort_tests.js"), 
    "Insertion Sort": require("./sorting_algorithms/insertion_sort_tests.js"), 
    "Selection Sort": require("./sorting_algorithms/selection_sort_tests.js"), 
    "Bucket Sort": require("./sorting_algorithms/bucket_sort_tests.js"), 
    "Merge Sort": require("./sorting_algorithms/merge_sort_tests.js"), 
    "Quick Sort": require("./sorting_algorithms/quick_sort_tests.js"), 
    "Graph DFS": require("./trees/depth_first_search_tests.js")
};

// Evaluate tests
let results = {};
console.log("Starting test suite...\n");
for (let algoTestKey in tests) {
    console.log("---------- " + algoTestKey + " ----------");
    console.log("");
    results[algoTestKey] = tests[algoTestKey].runTests();
    console.log("");
}
console.log("----------\n");

// Show any failed tests
for (let algorithmKey in results) {
    let currAlgo = results[algorithmKey];
    for (let testKey in currAlgo) {
        let currTest = currAlgo[testKey];
        if (currTest.grade == testTools.Result.FAIL) {
            console.log("FAILED | " + algorithmKey + "/" + testKey + ": ");
            console.log("-> Input: " + currTest.input);
            console.log("-> Output: " + currTest.output);
            console.log();
        }
    }
}

console.log("All tasks finished.");