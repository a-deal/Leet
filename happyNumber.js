/*
 Input: Num (Positive)
 Output: Bool

 Use Cases:

 h(23) = 4 + 6
 h(10) = 1 => true

 h(239) = 4 + 9 + 81
 h(94) = 81 + 16
 h(97) = 81 + 49
 h(130) = 1 + 9 + 0
 h(10) = 10

 h(2) = 4
 h(4) = 16
 h(16) = 1 + 36
 h(37) = 9 + 49
 h(58) = 25 + 40
 h(65) = 36 + 25
 h(61) = 36 + 1

 // Pseudo code

 function h (<int> n)
    curr to equal either input or the current sum of squares
    find square of each digit
    add squares together
    if sum === 1 return true
    else update curr and repeat


 */
var isHappy = function(n) {
    var pastSums = {};
    pastSums[n] = n;

    while (n > 1) {
        var digits = n.toString().split('')
        n = digits.reduce(function(acc, curr){
            curr = Math.pow(+curr,2);
            return acc + curr;
        }, 0)

        if (n in pastSums) return false;
        pastSums[n] = n;
    }
    return true;
};
