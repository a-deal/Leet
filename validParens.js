var pairings = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
};

var closers = {
  ')' : ')',
  '}' : '}',
  ']' : ']'
}

var isBalanced = function (str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] in pairings) {
            stack.push(str[i])
        } else if (str[i] in closers) {
          var top = stack.pop();
          if (top === undefined || str[i] !== pairings[top]) {
              return false;
          }
        }
    }
    return stack.length === 0;
}

console.log(isBalanced('((abk(cdj))'));
