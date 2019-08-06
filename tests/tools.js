const list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
const list2 = [1, 2, 3, 4, 5, 7, 8, 10];
const list3 = list2.slice().reverse();
const list4 = [.1, .5, .4, .2, .6, .7, .9, .8, .3, 0];
const list5 = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1];
const list6 = list5.slice().reverse();

const result = {
    PASS: true, 
    FAIL: false
};

/**
 * Tests if the given list is sorted in ascending order.
 * @param {number[]} list 
 * @returns {boolean}
 */
function testAscending(list) {
    let prevValue = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < prevValue) {
            return false;
        }
        prevValue = list[i];
    }
    return true;
}

/**
 * Calculates the percentage of tests passed.
 * @param {{string:{string:boolean}}} results 
 */
function calcPercentage(results) {
    let testCount = 0;
    let passCount = 0;
    for (let resultKey in results) {
        for (let testKey in results[resultKey]) {
            testCount++;
            if (results[resultKey][testKey] == result.PASS) {
                passCount++;
            }
        }
    }
    return (passCount / testCount) * 100;
}

module.exports = {
    testAscending: testAscending, 
    list1: list1, list2: list2, 
    list3: list3, list4: list4, 
    list5: list5, list6: list6, 
    result: result, calcPercentage: calcPercentage
};