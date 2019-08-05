//@ts-check

const insertionSort = require("../insertion_sort/main.js");

/**
 * Bucket Sort (ascending). Efficient sorting of a uniform distribution. O(n) average time complexity.
 * https://www.geeksforgeeks.org/bucket-sort-2/
 * Note: Only works on values between 0 and 1.
 * @param {number[]} list 
 * @returns {number[]}
 */
function bucketSort(list) {
    var buckets = getBuckets(list.length);
    var toReturn = [];
    for (var i = 0; i < list.length; i++) {
        var bucketIndex = Math.floor(list[i] * list.length);
        buckets[bucketIndex].push(list[i]);
    }
    for (var i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
    }
    for (var i = 0; i < buckets.length; i++) {
        toReturn = toReturn.concat(buckets[i]);
    }
    return toReturn;
}

/**
 * Returns a list of buckets of length n.
 * @param {*} n 
 * @returns {any[]}
 */
function getBuckets(n) {
    var buckets = [];
    for (var i = 0; i < n; i++) {
        buckets.push([]);
    }
    return buckets;
}

module.exports = bucketSort;