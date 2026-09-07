/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    let visited = new Array(numCourses).fill(0);
    let result = [];

    function dfs (course) {
        if(visited[course] === 1) return false; 
        if(visited[course] === 2) return true;
        visited[course] = 1;

        for(let neighbors of adj[course]) {
            if(!dfs(neighbors)) return false;
        }
        visited[course] = 2;
        result.push(course)

        return true;

        
    }

    for (let [a, b] of prerequisites) {
        adj[b].push(a);
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) {return []}
    }
    return result.reverse();
}