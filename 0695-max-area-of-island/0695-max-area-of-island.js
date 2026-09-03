/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function maxAreaOfIsland(grid) {
    function dfs(grid, row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return 0;
        if (grid[row][col] === 0) return 0;

        grid[row][col] = 0;

        return 1 + dfs(grid, row+1, col) + dfs(grid, row-1, col) + dfs(grid, row, col+1) + dfs(grid, row, col-1);
    }
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(grid, i, j));
            }
        }
    }
    return maxArea;
}