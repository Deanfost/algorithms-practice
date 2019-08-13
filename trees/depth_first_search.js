//@ts-check

const GraphNode = require("./graph.js");

/**
 * Depth-First search of a graph.
 * @param {GraphNode} node 
 * @returns {number[]}
 */
function depthFirstSearch(node) {
    let traversal = depthFirstHelper(node, []);
    return traversal.map((value) => value.val);
}

/**
 * A helper for Depth-First search.
 * @param {GraphNode} node 
 * @param {GraphNode[]} visited 
 * @returns {GraphNode[]}
 */
function depthFirstHelper(node, visited) {
    visited.push(node);
    for (let i = 0; i < node.buddies.length; i++) {
        let buddy = node.buddies[i];
        if (!visited.includes(buddy)) {
            depthFirstHelper(buddy, visited);
        }
    }
    return visited;
}

module.exports = depthFirstSearch;