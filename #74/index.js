function BFS (graph, src) {
    let visited = new Set();
    let queue = [src];
    visited.add(src);
    
    while(queue.length > 0) {
        const node = queue.shift();
        console.log(node);
        
        for(const neighbour of graph[node]) {
            if(!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour)
            }
        }
    }
}

function DFS(graph, src) {
    let visited = new Set();
    let stack = [src];

    while (stack.length > 0) {
        const node = stack.pop();

        if (visited.has(node)) continue;  
        visited.add(node);
        console.log(node);

        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                stack.push(neighbour);
            }
        }
    }
}


const graph = {
    0: [1, 2],
    1: [0, 4],
    2: [0, 3],
    3: [2, 4],
    4: [1, 3],
};
