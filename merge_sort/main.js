// @ts-check

var list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
var list2 = [1, 2, 3, 4, 5, 7, 8, 10];
var list3 = list2.slice().reverse();

console.log("Original list: " + list1);
console.log("Sorted list: " + mergeSort(list1));

/**
 * Merge Sort (ascending). Divide and conquer. O(nlog(n)) average time complexity.
 * https://www.geeksforgeeks.org/merge-sort/
 * @param {number[]} list 
 * @returns {number[]}
 */
function mergeSort(list) {
    if (list.length == 1) {
        return list;
    }

    var middle = list.length / 2;
    var list1 = mergeSort(list.slice(0, middle));
    var list2 = mergeSort(list.slice(middle));
    return merge(list1, list2);
}

/**
 * Merge Sort helper function. Merges and sorts sub arrays inside of mergeSort().
 * @param {number[]} list1 
 * @param {number[]} list2 
 * @returns {number[]}
 */
function merge(list1, list2) {
    var tempList = [];

    while (list1.length != 0 && list2.length != 0) {
        if (list1[0] < list2[0]) {
            tempList.push(list1[0]);
            list1.shift();
        } else {
            tempList.push(list2[0]);
            list2.shift();
        }
    }

    if (list1.length != 0) 
        tempList = tempList.concat(list1);
    else 
        tempList = tempList.concat(list2);

    return tempList;
}