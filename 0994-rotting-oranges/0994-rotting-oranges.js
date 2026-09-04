/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    let queue = [];
    let fresh = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 2) queue.push([i, j]);
            if(grid[i][j] === 1) fresh++;
        }
    }
    
    if(fresh === 0) return 0;
    
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let min = 0;
    
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let [row, col] = queue.shift();
            for(let [dr, dc] of directions) {
                let newRow = row + dr;
                let newCol = col + dc;
                if(newRow < 0 || newCol < 0 || newRow >= grid.length || newCol >= grid[0].length) continue;
                if(grid[newRow][newCol] !== 1) continue;
                grid[newRow][newCol] = 2;
                fresh--;
                queue.push([newRow, newCol]);
            }
        }
        min++;
    }
    
    return fresh === 0 ? min - 1 : -1;
};