// #1 
const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 4],
    3: [1],
    4: [2],
};

function printNode(graph, startwith) {
    let visited = new Set();
    let queue = [startwith];

    visited.add(startwith);

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current);

        let neighbors = graph[current];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

printNode(graph, 0);

// #2


const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 4],
    3: [1],
    4: [2],
};

function BFS(graph, src) {
    let visited = new Set();
    let queue = [src];
    let dist = {};

    visited.add(src);
    dist[src] = 0;              // distance to itself is 0

    while (queue.length > 0) {
        let current = queue.shift();   // front (BFS)

        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                dist[neighbor] = dist[current] + 1;  // one step further
                queue.push(neighbor);
            }
        }
    }

    for (const node in dist) {
        console.log(`${node} -> ${dist[node]}`);
    }
}

printNode(graph, 0);

// #3

// const graph = {
//     0: [1, 2],
//     1: [0, 3, 4],
//     2: [0, 3],
//     3: [1, 2],
//     4: [1],
// };

// function printNodesDFS(graph, startwith) {
//     let visited = new Set();
//     let stack = [startwith];

//     while (stack.length > 0) {
//         let current = stack.pop();

//         if (!visited.has(current)) {
//             visited.add(current);
//             console.log(current);

//             let neighbors = graph[current];
//             for (const neighbor of neighbors) {
//                 if (!visited.has(neighbor)) {
//                     stack.push(neighbor);
//                 }
//             }
//         }
//     }
// }

// printNodesDFS(graph, 0);

// #4

// const grid = [
//     [1, 1, 0, 0],
//     [1, 0, 0, 1],
//     [0, 0, 0, 1],
//     [0, 0, 0, 1],
// ];


// function findGrind(graph, pointer) {
//     let visited = new Set();
//     let queue = [pointer];
//     let count = 0;

//     visited.add(pointer);

//     while (queue.length > 0) {
//         let current = queue.shift();
//         console.log(current);

//         let row = matrix[current];
//         for (let neighbor = 0; neighbor < row.length; neighbor++) {
//             if (row[neighbor] === 1 && !visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push(neighbor);
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// findGrind(graph, 0);

// #5



const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 4],
    3: [1],
    4: [2],
};

function findPath(graph, start,target) {
    let visited = new Set();
    let stack = [start];
    visited.add(start);

    while (stack.length > 0) {
        let current = stack.pop();
        console.log(current);

        if(current === target) {
            return true
        }

        let neighbors = graph[current];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
    return false
}

findPath(graph, 0, 4);
