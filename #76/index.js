function BFS (graph, ans) {
    let visited = new Set();
    let queue = [ans];
    let level = queue;
    visited.add(ans);

   while (queue.length > 0) {
    let levelSize = queue.length;  
    let levelNodes = [];

    for (let i = 0; i < levelSize; i++) {
        let current = queue.shift();
        levelNodes.push(current);

        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    console.log(levelNodes.join(" "));
}
}

function DFS(graph, startNode) {
    let visited = new Set();
    let stack = [startNode];
    let result = [];

    while (stack.length > 0) {
        let current = stack.pop();


        if (!visited.has(current)) {
            visited.add(current);
            result.push(current); 


            let neighbors = graph[current] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    
    return result; 
}


function DFS2 (graph, node) {
    let visited = new Set();
    let stack = [node];
    visited.add(node);

    while(stack.length > 0) {
        let current = stack.pop();
        console.log(current);

        let neighbor = stack[current];
        for(const neighbors of neighbor) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor)
            }
        }
        
    }
    
}