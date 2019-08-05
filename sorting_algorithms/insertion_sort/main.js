// @ts-check

/**
 * Insertion Sort (ascending). Sorting like playing cards. O(n^2) average time complexity.
 * https://www.geeksforgeeks.org/insertion-sort/
 * @param {number[]} list 
 */
function insertionSort(list) {
    for (var i = 1; i < list.length; i++) {
        for (var k = 0; k < i; k++) {
            if (list[i] <= list[k]) {
                list.splice(k, 0, list[i]);
                list.splice(i + 1, 1);
                break;
            }
        }
    }
}

module.exports = insertionSort;