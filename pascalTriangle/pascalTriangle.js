var generate = function(numRows) {
    var container = [], left, right;

    if (numRows < 1) return container;

    for (var i = 0; i < numRows; i++) {
        container[i] = [];
        for (var j = 0; j < i + 1; j++) {
            if (i === 0) {
                container[i].push(1);
            } else {
                left = container[i - 1][j - 1] || 0;
                right = container[i - 1][j] || 0;
                container[i][j] = left + right;
            }
        }
    }

    return container;

};
