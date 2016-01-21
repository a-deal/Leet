var pairings = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
};

var isBalanced = function (str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] in pairings) {
            stack.push(str[i])
            continue;
        }

        var top = stack.pop();
        if (top === undefined || str[i] !== pairings[top]) {
            return false;
        }
    }
    return stack.length === 0;
}
