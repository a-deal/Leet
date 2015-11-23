var isValidSudoku = function(board) {
    var pieces = {}, p, bucket, currentSub;
    //Rows
    for (var i = 0; i < board.length; i++) {
        //Columns
        for (var j = 0; j < board.length; j++) {
            //piece is already in hash
            p = board[i][j]
            if (pieces[p] !== undefined) {
                bucket = pieces[p];
                currentSub = findSubBoard(i,j);
                for (var k = 0; k < bucket.length; k++) {
                    if (bucket[k][0] === i || bucket[k][1] === j || bucket[k][2] === currentSub) return false;
                }
                bucket.push([i,j,currentSub]);
            }
            //piece is not in hash
            else if (p !== '.') {
                pieces[p] = [[i,j,findSubBoard(i,j)]]
            }
        }
    }
    return true;
};

function findSubBoard (row, column) {
    if (row <= 2 && column <= 2) return 1;
    if (row <= 2 && column <= 5) return 2;
    if (row <= 2 && column <= 8) return 3;
    if (row <= 5 && column <= 2) return 4;
    if (row <= 5 && column <= 5) return 5;
    if (row <= 5 && column <= 8) return 6;
    if (row <= 8 && column <= 2) return 7;
    if (row <= 8 && column <= 5) return 8;
    if (row <= 8 && column <= 8) return 9;
}
