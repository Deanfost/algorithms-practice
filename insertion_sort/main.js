// @ts-check

var list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
var list2 = [1, 2, 3, 4, 5, 7, 8, 10];
var list3 = list2.slice().reverse();

console.log("Original list: " + list1);
insertionSort(list1)
console.log("Sorted list: " + list1);

/**
 * Insertion Sort (ascending). Sorting like playing cards. O(N^2) average time complexity.
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