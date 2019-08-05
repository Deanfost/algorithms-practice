// @ts-check

/**
 * Driver function for Quick Sort.
 * @param {number[]} list 
 */
function sort(list) {
    quickSort(list, 0, list.length - 1)
}

/**
 * Quick Sort (ascending). Divide and conquer. O(nlog(n)) average time complexity. 
 * https://www.geeksforgeeks.org/quick-sort/
 * @param {number[]} list 
 */
function quickSort(list, start, end) {
    if (start < end) {
        var pivot = partition(list, start, end);
        quickSort(list, start, pivot - 1);
        quickSort(list, pivot + 1, list.length - 1);
    }
}

/**
 * Sorts elements in relation to the pivot.
 * @param {number[]} list 
 * @param {number} start 
 * @param {number} end 
 * @returns {number}
 */
function partition(list, start, end) {
    var pivot = list[end];
    var smallerLeft = start - 1;
    for (var i = start; i < end; i++) {
        if (list[i] <= pivot) {
            smallerLeft++;
            swap(list, i, smallerLeft);
        }
    }
    swap(list, smallerLeft + 1, end);
    return smallerLeft + 1;
}

/**
 * Swaps two elements in a list.
 * @param {number[]} list 
 * @param {number} a Index of element a.
 * @param {number} b Index of element b.
 */
function swap(list, a, b) {
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

module.exports = sort;