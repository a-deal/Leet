var canPermutePalindrome = function(s) {
    var chars = {}, unique = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] in chars) {
            chars[s[i]]++;
        } else {
            chars[s[i]] = 1;
        }
    }
    for (var prop in chars) {
        if (chars[prop] % 2 !== 0 && unique === false) {
            unique = true;
        } else if (chars[prop] % 2 !== 0 && unique === true) {
            return false;
        }
    }
    return true;
};
