/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    let visited = new Array(numCourses).fill(0);

    function dfs (course) {
        if(visited[course] === 1) return false; 
        if(visited[course] === 2) return true;
        visited[course] = 1;

        for(let neighbors of adj[course]) {
            if(!dfs(neighbors)) return false;
        }
        visited[course] = 2;

        return true;

        
    }

    for (let [a, b] of prerequisites) {
        adj[b].push(a);
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) {return false}
    }
    return true;


}