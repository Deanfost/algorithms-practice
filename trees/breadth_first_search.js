//@ts-check

const GraphNode = require("./graph.js");

/**
 * Breadth-First search of a graph.
 * @param {GraphNode} node 
 * @returns {number[]}
 */
function breadthFirstSearch(node) {
    let visited = [];
    let queue = [node];
    
    while (queue.length > 0) {
        let curr = queue.shift();
        if (!visited.includes(curr)) {
            for (let i = 0; i < curr.buddies.length; i++) {
                let currBuddy = curr.buddies[i];
                if (!visited.includes(currBuddy)) {
                    queue.push(currBuddy);
                }
            }
            visited.push(curr);
        }
    }
    return visited.map((value) => value.val);
}

module.exports = breadthFirstSearch;