/**
 * Driver file for the basic project test suite. Takes results from individual test files
 * and accumlulates and prints results.
 */

const testTools = require("./tools.js");

const tests = {
    "Bubble Sort": require("./sorting_algorithms/bubble_sort.js"), 
    "Insertion Sort": require("./sorting_algorithms/insertion_sort.js"), 
    "Selection Sort": require("./sorting_algorithms/selection_sort.js.js")
};
let results = {};

// Evaluate tests
console.log("Starting test suite...\n");
for (let testKey in tests) {
    console.log("---------- " + testKey + " ----------");
    console.log("");
    results[testKey] = tests[testKey].runTests();
    console.log("");
}
console.log("----------");

// Show overall results
console.log();
console.log("Project grade: " + Math.round(testTools.calcPercentage(results) * 100) / 100 + "%");
console.log("All tasks finished.");