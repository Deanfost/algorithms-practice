const list1 = [345, 6, 2, 56, 2, 87, 8, 6, 7, 60]
const list2 = [1, 2, 3, 4, 5, 7, 8, 10];
const list3 = list2.slice().reverse();
const list4 = [.1, .5, .4, .2, .6, .7, .9, .8, .3, 0];
const list5 = [.1, .2, .3, .4, .5, .6, .7, .8, .9];
const list6 = list5.slice().reverse();

const Result = {
    PASS: true, 
    FAIL: false
};

/**
 * Tests if the given input is sorted, prints and returns the result.
 * @param {string} testKey
 * @param {number[]} list 
 * @returns {Result}
 */
function testResult(testKey, list) {
    let result;
    if (testAscending(list)) {
        result = Result.PASS;
        console.log(testKey + ": PASSED ✓");
    } else {
        result = Result.FAIL;
        console.log(testKey + ": FAILED ✗");
    }
    return result;
}

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
 * Returns a new list with random numbers between a certain range of length 100.
 * @param {number} absoluteRange
 * @returns {number[]} 
 */
function getRandomList(absoluteRange) {
    let list = [];
    let n = 100;
    while (n > 0) {
        let sign = Math.round(Math.random()) == 0 ? 1 : -1;
        list.push(Math.floor(Math.random() * absoluteRange) * sign);
        n--;
    }
    return list;
}

module.exports = {
    testResult: testResult, 
    list1: list1, list2: list2, 
    list3: list3, list4: list4, 
    list5: list5, list6: list6, 
    Result: Result, getRandomList: getRandomList
};