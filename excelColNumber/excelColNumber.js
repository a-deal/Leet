var titleToNumber = function(s) {
    var orders = s.length - 1;
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        current = s[i].charCodeAt() - 64;
        total += current * Math.pow(26, orders);
        orders--;
    }
    return total;
};
