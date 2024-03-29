// @ts-check

/**
 * Bubble Sort (ascending). Simplest sorting algorithm. O(n^2) average time complexity.
 * https://www.geeksforgeeks.org/bubble-sort/
 * @param {number[]} list 
 */
function bubbleSort(list) {
    let shouldSort = true;
    while (shouldSort) {
        shouldSort = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                shouldSort = true;
            }
        }
    }
}

module.exports = bubbleSort;