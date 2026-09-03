/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function numIslands(grid) {
    function dfs(grid, row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
        if (grid[row][col] === '0') return;

        grid[row][col] = '0';

        dfs(grid, row + 1, col);
        dfs(grid, row - 1, col);
        dfs(grid, row, col + 1);
        dfs(grid, row, col - 1);
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}