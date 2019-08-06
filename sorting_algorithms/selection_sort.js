// @ts-check

/**
 * Selection Sort (ascending). Like Insertion Sort but sort of flipped. O(n^2) average time complexity.
 * https://www.geeksforgeeks.org/selection-sort/
 * @param {number[]} list 
 */
function selectionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let lindex = i;
        for (let k = i; k < list.length; k++) {
            if (list[k] <= list[lindex]) {
                lindex = k;
            }
        }
        list[lindex] = [list[i], list[i] = list[lindex]][0]; // Swap
    }   
}

module.exports = selectionSort;