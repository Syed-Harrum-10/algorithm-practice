/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function cloneGraph(node) {
    if (!node) return null;

    let newMap = new Map();

    function dfs(node) {

        if (newMap.has(node)) return newMap.get(node);

        let newNode = new Node(node.val);
        newMap.set(node, newNode);

        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }

        return newNode;

    }

    return dfs(node);

}
