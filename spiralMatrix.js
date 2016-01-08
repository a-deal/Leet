var spiralOrder = function (matrix) {
    if (matrix.length <= 1){
        var result = matrix[0] || matrix;
        return result;
    }
    var r = matrix[0].length, b = matrix.length, t = 0, l = 0;
    var results = [], cont = true,directions = ['r', 'd', 'l', 'u'];
    (function traverse (d) {
        var i;
        if (directions[d] === 'r') {
            for (i = l; i < r; i++) {
                results.push(matrix[t][i]);
            }
            r--;
            if (t === b) {
                cont = false;
            }
        } else if (directions[d] === 'd') {
            for (i = t + 1; i < b; i++) {
                results.push(matrix[i][r]);
            }
            b--;
            if ( l === r) {
                cont = false;
            }
        } else if (directions[d] === 'l') {
            for (i = r - 1; i > l; i--) {
                results.push(matrix[b][i])
            }
            l++;
            if (t == b) {
                cont = false;
            }
        } else if (directions[d] === 'u') {

            for (i = b; i > t; i--) {
                results.push(matrix[i][l - 1])
            }
            t++;
            if (r === l || t === b) {
                cont = false;
            }
        }

        if (!cont) {
            return;
        } else {
            var next = d + 1 === directions.length ? 0 : d + 1;
            traverse(next);
        }
    })(0)
    return results;
}