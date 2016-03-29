/*

Input  : <string> digits
Output : <array> combos

*/
var letters = [null, '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

var initCombos = function (char) {
    if (!char) return [];
    var combos = []
    var comboLetters = letters[+char];
    for (var i = 0; i < comboLetters.length; i++) {
        combos.push(comboLetters[i]);
    }
    return combos;
}

var initDigits = function (digits) {
    var queue = [];
    for (var i = 1; i < digits.length; i++) {
        queue.push(digits[i])
    }
    return queue;
}

var letterCombinations = function(digits) {
    var digitQueue = initDigits(digits);
    var results = initCombos(digits[0]);
    while (digitQueue.length) {
        var letterStack = initCombos((digitQueue.shift()));
        var newResults = [];
        while (letterStack.length) {
            var letter = letterStack.pop();
            for (i = 0; i < results.length; i++) {
                newResults.push(results[i] + letter);
            }
        }
        results = newResults;
    }
    return results;
};
