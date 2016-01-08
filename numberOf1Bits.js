var hammingWeight = function(n) {
    var binary = n.toString(2);
    var count = 0;
    for (var i = 0; i < binary.length; i++) {
        if(parseInt(binary[i]) === 1) {
            count++;
        }
    }
    return count;
};
