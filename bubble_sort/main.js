// @ts-check

var list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
var list2 = [1, 2, 3, 4, 5, 7, 8, 10];
var list3 = list2.slice().reverse();

console.log("Original list: " + list3);
bubbleSort(list3)
console.log("Sorted list: " + list3);

/**
 * Bubble Sort (ascending). Simplest sorting algorithm. O(N^2) average time complexity.
 * https://www.geeksforgeeks.org/bubble-sort/
 * @param {number[]} list 
 */
function bubbleSort(list) {
    var shouldSort = true;
    while (shouldSort) {
        shouldSort = false;
        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                var temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                shouldSort = true;
            }
        }
    }
}