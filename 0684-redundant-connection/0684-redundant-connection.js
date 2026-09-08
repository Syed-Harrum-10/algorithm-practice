/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let n = edges.length;
    let parent = Array.from({length: n + 1}, (_, i) => i);
    
    function find(node) {
        if(parent[node] !== node) return find(parent[node]);
        return node;
    }
    
    for(let [a, b] of edges) {
        let rootA = find(a);
        let rootB = find(b);
        
        if(rootA === rootB) return [a, b];
        
        parent[rootA] = rootB;
    }
};