var generatePossibleNextMoves = function(s) {
    var results = [], newMove;
    for (var i = 1; i < s.length; i++) {
        if (s[i] === '+' && s[i - 1] === '+') {
            newMove = s.split('');
            newMove[i] = '-';
            newMove[i - 1] = '-';
            results.push(newMove.join(''));
        }
    }
    return results;
};
