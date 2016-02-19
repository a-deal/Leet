/*

 Input: Number
 Output: Bool
 Edge Cases: Input === 1

 h(21) => 7
 h(7) => 2.3333...
 h(2.3) => .7666...

 */
var isPowerOfThree = function(n) {
    if (n / 3 === 1 || n == 1) {
        return true
    }
    if (n / 3 < 1 ) {
        return false
    }
    return isPowerOfThree(n / 3);
};
