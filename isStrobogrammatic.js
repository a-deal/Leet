var stroboNums = {
     0 : 0,
     1 : 1,
     6 : 9,
     8 : 8,
     9 : 6
 };
var isStrobogrammatic = function(num) {
    var digits = num.split('');
    for (var i = 0; i < digits.length; i++) {
        if (!(digits[i] in stroboNums)) return false;
        digits[i] = stroboNums[digits[i]];
    }
    // var verdict = +(digits.reverse().join('')) === +num;
    return +(digits.reverse().join('')) === +num ? true : false;
};
