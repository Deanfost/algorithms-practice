//@ts-check

const insertionSort = require("../sorting_algorithms/insertion_sort");

/**
 * Bucket Sort (ascending). Efficient sorting of a uniform distribution. O(n) average time complexity.
 * https://www.geeksforgeeks.org/bucket-sort-2/
 * Note: Only works on values between 0 and 1.
 * @param {number[]} list 
 * @returns {number[]}
 */
function bucketSort(list) {
    let buckets = getBuckets(list.length);
    let toReturn = [];
    for (let i = 0; i < list.length; i++) {
        let bucketIndex = Math.floor(list[i] * list.length);
        buckets[bucketIndex].push(list[i]);
    }
    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
    }
    for (let i = 0; i < buckets.length; i++) {
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
    let buckets = [];
    for (let i = 0; i < n; i++) {
        buckets.push([]);
    }
    return buckets;
}

module.exports = bucketSort;