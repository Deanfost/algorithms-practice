/**
 * Driver file for the basic project test suite. Takes results from individual test files
 * and accumlulates and prints results.
 */

const testTools = require("./tools.js");

const tests = {"Bubble Sort": require("./algorithms/bubble_sort.js")}
let results = {};

// Evaluate tests
console.log("Starting test suite...\n");
for (var testKey in tests) {
    console.log("---------- " + testKey + " ----------");
    console.log("");
    results[testKey] = tests[testKey].runTests();
    console.log("");
    console.log("----------");
}

// Show overall results
console.log();
console.log("Tests passed: " + testTools.calcPercentage(results) + "%");
console.log("All tasks finished.");