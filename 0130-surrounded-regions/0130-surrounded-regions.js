/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    function dfs(row, col) {
        if(row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
        if(board[row][col] !== 'O') return;
        
        board[row][col] = 'S';
        
        dfs(row+1, col);
        dfs(row-1, col);
        dfs(row, col+1);
        dfs(row, col-1);
    }


    for(let j = 0; j < board[0].length; j++) {
        if(board[0][j] === 'O') dfs(0, j);
        if(board[board.length-1][j] === 'O') dfs(board.length-1, j);
    }
    

    for(let i = 0; i < board.length; i++) {
        if(board[i][0] === 'O') dfs(i, 0);
        if(board[i][board[0].length-1] === 'O') dfs(i, board[0].length-1);
    }


    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'O') board[i][j] = 'X';
            if(board[i][j] === 'S') board[i][j] = 'O';
        }
    }
};