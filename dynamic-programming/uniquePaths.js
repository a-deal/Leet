/*
 Input  : <int> m, <int> n
 Output : <int> numsOfPath


 //////////////// Brute Force | Recursive Solution ////////////

var uniquePaths = function(m, n, i, j, numPaths) {
    i = i || 1, j = j || 1, numPaths = numPaths || 0;

    if (i > m || j > n) return 0;

    if (i == m && j === n) {
        return 1;
    }

    return uniquePaths(m, n, i, j + 1, numPaths) + uniquePaths(m, n, i + 1, j, numPaths);
};

 */
 var constructGraph = function (m, n) {
    var graph = []
    for (var i = 0; i < m; i++) {
        graph[i] = [];
        for (var j = 0; j < n; j++)
            if (i === 0 || j === 0) graph[i][j] = 1;
            graph[i][j] = 0;
    }
    return graph;
 };

var uniquePaths = function(m, n) {
   var graph = constructGraph(m, n);

    for (var i = 1; i < graph.length; i++) {
        for (var j = 1; j < graph[i].length; j++) {
            graph[i][j] = graph[i][j - 1] + graph[i - 1][j]
        }
    }
    return graph[m - 1][n - 1]
};
