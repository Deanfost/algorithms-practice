// @ts-check

/**
 * A basic definition of a graph with adjacent nodes.
 * @param {*} val 
 * @param {*} buddies 
 */
const GraphNode = function(val, buddies) {
    this.val = val;
    this.buddies = buddies;
}

module.exports = GraphNode;