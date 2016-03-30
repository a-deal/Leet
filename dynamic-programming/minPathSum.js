var findMinPaths = function (grid) {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i - 1] === undefined && grid[i][j - 1] === undefined) {
                continue;
            } else if (grid[i - 1] === undefined) {
                grid[i][j] += grid[i][j - 1];
            } else if (grid[i][j - 1] === undefined){
                grid[i][j] += grid[i - 1][j];
            } else {
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
            }
        }
    }
}
var minPathSum = function(grid) {
    findMinPaths(grid);
    return grid[grid.length - 1][grid[0].length - 1];
};
