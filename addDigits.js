var addDigits = function(num) {
    if (num > 9) {
        if (num % 9 === 0) {
            return 9;
        }
        return num % 9;
    }
    return num;

};
