// @ts-check

var list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
var list2 = [1, 2, 3, 4, 5, 7, 8, 10];
var list3 = list2.reverse();

console.log("Original list: " + list3);
bubbleSort(list3)
console.log("Sorted list: " + list3);

/**
 * Insertion Sort (ascending). Sorting like playing cards. O(N^2) average case.
 * @param {*} list 
 */
function insertionSort(list) {
    
}