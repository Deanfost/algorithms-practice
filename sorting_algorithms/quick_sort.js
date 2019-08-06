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
        let pivot = partition(list, start, end);
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
    let pivot = list[end];
    let smallerLeft = start - 1;
    for (let i = start; i < end; i++) {
        if (list[i] <= pivot) {
            smallerLeft++;
            // swap(list, i, smallerLeft);
            list[i] = [list[smallerLeft], list[smallerLeft] = list[i]][0];
        }
    }
    // swap(list, smallerLeft + 1, end);
    list[smallerLeft + 1] = [list[end], list[end] = list[smallerLeft + 1]][0]; // Swap
    return smallerLeft + 1;
}

module.exports = sort;