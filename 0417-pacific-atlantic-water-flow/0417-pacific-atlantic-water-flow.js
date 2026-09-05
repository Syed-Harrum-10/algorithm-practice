/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = 
function pacificAtlantic(grid) {
    let pacific = new Set();
    let atlantic = new Set();


    function dfs(row, col, set) {
        set.add(`${row},${col}`);

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [dr, dc] of directions) {
            let newRow = row + dr;
            let newCol = col + dc;


            if (newRow < 0 || newCol < 0 || newRow >= grid.length || newCol >= grid[0].length) continue;

            if (set.has(`${newRow},${newCol}`)) continue;

            if (grid[newRow][newCol] < grid[row][col]) continue;

            dfs(newRow, newCol, set);
        }
    }

    for (let i = 0; i < grid.length; i++) dfs(i, 0, pacific);
    for (let j = 0; j < grid[0].length; j++) dfs(0, j, pacific);
    for (let i = 0; i < grid.length; i++) dfs(i, grid[0].length - 1, atlantic);
    for (let j = 0; j < grid[0].length; j++) dfs(grid.length - 1, j, atlantic);


    let result = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (pacific.has(`${i},${j}`) && atlantic.has(`${i},${j}`)) {
                result.push([i, j]);
            }
        }
    }
    return result;

}