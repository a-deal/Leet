var onlyLettersAndNumbers = function (s) {
    var validString = ''
    for (var i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z]|[0-9]/)) validString += s[i];
    }
    return validString;
}
var validatePalindrome = function (s) {
  for (var i = 0; i < Math.floor(s.length/2); i++) {
      if (s[i] !== s[(s.length - i) - 1]) return false;
  }
  return true;
}
var isPalindrome = function(s) {
  s = onlyLettersAndNumbers(s.toLowerCase());
  return validatePalindrome(s);
};
