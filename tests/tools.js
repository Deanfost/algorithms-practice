const GraphNode = require("../trees/graph.js");

const list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
const list2 = [1, 2, 3, 4, 5, 7, 8, 10];
const list3 = list2.slice().reverse();
const list4 = [.1, .5, .4, .2, .6, .7, .9, .8, .3, 0];
const list5 = [.1, .2, .3, .4, .5, .6, .7, .8, .9];
const list6 = list5.slice().reverse();

/**
 * All graph start points are determined by the node that is exported below
 */

const uniGraph = new GraphNode(1, [
    new GraphNode(2, []), 
    new GraphNode(3, [
        new GraphNode(8, [
            new GraphNode(9, [])
        ])
    ]), 
    new GraphNode(4, []),
    new GraphNode(5, [
        new GraphNode(6, []), 
        new GraphNode(7, [])
    ])
]);
const uniGraphDFS = [1, 2, 3, 8, 9, 4, 5, 6, 7];

const squareGraph1 = new GraphNode(1, []);
const squareGraph2 = new GraphNode(2, []);
const squareGraph3 = new GraphNode(3, []);
const squareGraph4 = new GraphNode(4, []);
squareGraph1.buddies.push(squareGraph2, squareGraph4);
squareGraph2.buddies.push(squareGraph3, squareGraph1);
squareGraph3.buddies.push(squareGraph4, squareGraph2);
squareGraph4.buddies.push(squareGraph1, squareGraph3);
const squareGraphDFS = [1, 2, 3, 4];

const bothGraph0 = new GraphNode(0, []);
const bothGraph1 = new GraphNode(1, []);
const bothGraph2 = new GraphNode(2, []);
const bothGraph3 = new GraphNode(3, []);
bothGraph0.buddies.push(bothGraph2, bothGraph1);
bothGraph1.buddies.push(bothGraph2);
bothGraph2.buddies.push(bothGraph0, bothGraph3);
bothGraph3.buddies.push(bothGraph3);
const bothGraphDFS = [2, 0, 1, 3];

const smallGraph1 = new GraphNode(0, []);
const smallGraph2 = new GraphNode(12, []);
smallGraph1.buddies.push(smallGraph1);
smallGraph1.buddies.push(smallGraph2);
smallGraph2.buddies.push(smallGraph1);
const smallGraphDFS = [0, 12];

const Result = {
    PASS: true, 
    FAIL: false
};

/**
 * Tests if the given input is sorted, prints and returns the result.
 * @param {string} testKey
 * @param {number[]} list 
 * @returns {Result}
 */
function testSortingResult(testKey, list) {
    let result;
    if (testAscending(list)) {
        result = Result.PASS;
        console.log(testKey + ": PASSED ✓");
    } else {
        result = Result.FAIL;
        console.log(testKey + ": FAILED ✗");
    }
    return result;
}

/**
 * Tests if the given list is sorted in ascending order.
 * @param {number[]} list 
 * @returns {boolean}
 */
function testAscending(list) {
    let prevValue = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < prevValue) {
            return false;
        }
        prevValue = list[i];
    }
    return true;
}

/**
 * Tests if the result of a graph search is expected.
 * @param {string} testKey
 * @param {number[]} list1
 * @param {number[]} list2
 * @returns {Result}
 */
function testGraphResult(testKey, list1, list2) {
    let result;
    if (list1.join(",") == list2.join(",")) {
        result = Result.PASS;
        console.log(testKey + ": PASSED ✓");
    } else {
        console.log(testKey + ": FAILED ✗");
        result = Result.FAIL;
    }
    return result;
}

/**
 * Returns a new list with random numbers between a given abs range of length 100.
 * @param {number} absoluteRange
 * @returns {number[]} 
 */
function getRandomList(absoluteRange) {
    let list = [];
    let n = 100;
    while (n > 0) {
        let sign = Math.round(Math.random()) == 0 ? 1 : -1;
        list.push(Math.floor(Math.random() * absoluteRange) * sign);
        n--;
    }
    return list;
}

module.exports = {
    testSortingResult: testSortingResult, 
    list1: list1, list2: list2, 
    list3: list3, list4: list4, 
    list5: list5, list6: list6, 
    Result: Result, getRandomList: getRandomList, 
    uniGraph: {
        graph: uniGraph, 
        graphDFS: uniGraphDFS
    }, squareGraph: {
        graph: squareGraph1, 
        graphDFS: squareGraphDFS
    },
    bothGraph: {
        graph: bothGraph2, 
        graphDFS: bothGraphDFS
    },
    smallGraph: {
        graph: smallGraph1, 
        graphDFS: smallGraphDFS
    },
    testGraphResult: testGraphResult
};