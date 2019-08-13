const testTools = require("../tools.js");
const bfs = require("../../trees/breadth_first_search.js");

/**
 * Runs tests defined inside of the function. Returns dictionary containing test results.
 * @returns {{string: testTools.Result, string: [number], string: [number]}}
 */
function runTests() {
    const tests = {
        "testSquare": testTools.squareGraph, 
        "testLarge": testTools.bothGraph, 
        "testTree": testTools.uniGraph, 
        "testSmall": testTools.smallGraph
    };

    let results = {};
    for (let testKey in tests) {
        let traversal = bfs(tests[testKey].graph);
        results[testKey] = {
            grade: testTools.testGraphResult(testKey, traversal, tests[testKey].graphBFS), 
            input: tests[testKey].graph, 
            output: traversal
        };
    }
    return results;
}

module.exports = {runTests: runTests};