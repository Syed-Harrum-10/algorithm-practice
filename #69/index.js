// BFS - > breath first vertices
// DFS - > Depth first vertices

// BFS -> when you are in the vertices expore it other vertices dont go in the depth now 
// DFS -> we visit the vertics and then reject and explore more of it's

// BFS DETAILS : - let say we have a big graph we choice our vertices whcih is 1 now we are going to explore it and once we dont that let say the sub vertics of the 1 is 4 and 2 we going to put it in the queue(DS just for example). Now what you are going to do is we are going to explore 4 now and let say the sub vertics of 4 is only 3 then we go back and explore 2 and it sub vertics is 5,6,7,8 then we are going to explore the sub vertics of 3 whcih are 10 and 9 and there is no sub vertics for them so in this way are just explore our half of the graph.

// IMPORTANT -> we can start with any vertics you can also visit in any order
// RULES ->
// 1:  when you visit any vertics you must visit all it adjacent vertices and then move to other vertics to visit.
// 2: we only use queue in this.


// DFS -> we use stack here

// Description: - you can startt from any vertice you like. When you visit a new vertics start visiting it adjacent vertics but let say one you explored and one is left you can leave it and you can see it afterwards.


function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
}




function dfs(graph, start) {
  let visited = new Set();

  function helper(node) {
    visited.add(node);
    console.log(node);

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        helper(neighbour);
      }
    }
  }

  helper(start);
}

const graph = {
  1: [2, 3],
  2: [1, 4],
  3: [1],
  4: [2, 5],
  5: [4],
};

bfs(graph, 1);
dfs(graph, 1);