// @ts-check

var list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
var list2 = [1, 2, 3, 4, 5, 7, 8, 10];
var list3 = list2.slice().reverse();
var list4 = [40, 60, 100, 10, 60];
var list5 = [40, 60, 10, 100];

console.log("Original list: " + list5);
sort(list5);
console.log("Sorted list: " + list5);

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
    var largerLeft = start;
    var smallerRight = end - 1;
    while (largerLeft < smallerRight ) {
        while (list[largerLeft] <= pivot && largerLeft < end) {
            largerLeft++;
        }
        while (list[smallerRight] > pivot && smallerRight >= 0) {
            smallerRight--;
        }
        if (largerLeft < smallerRight)
            swap(list, largerLeft, smallerRight);
    }
    swap(list, end, largerLeft);
    return largerLeft;
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