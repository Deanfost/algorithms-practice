// @ts-check

/**
 * Selection Sort (ascending). Like Insertion Sort but sort of backwards. O(n^2) average time complexity.
 * https://www.geeksforgeeks.org/selection-sort/
 * @param {number[]} list 
 */
function selectionSort(list) {
    for (var i = 0; i < list.length; i++) {
        var lv = list[i];
        var lindex = i;
        var shouldSwap = false;
        for (var k = i; k < list.length; k++) {
            if (list[k] < lv) {
                lv = list[k];
                lindex = k;
                shouldSwap = true;
            }
        }
        if (shouldSwap) {
            list.splice(lindex, 1);
            list.splice(i - 1, 0, lv);
        }
    }   
}

module.exports = selectionSort;