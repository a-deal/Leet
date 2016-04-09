/*

 Input  : <array> strings,
 Output : <string> maxPrefix
 TC : O ( n ^ 2 )
 SC : O ( 1 );

 Example: 'abbc', 'adef', 'ab' => 'a'

 */

var longestCommonPrefix = function(strs) {
    var longest = strs[0] || '';

    for (var i = 1; i < strs.length; i++) {
        var j = 0, current = strs[i];
        while (j < current.length) {
            if (current[j] === longest[j]) {
                j++
            } else {
                break;
            }
        }
        longest = longest.slice(0, j)
    }
  return longest
};

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

assertEquals('ab', longestCommonPrefix(['abbc', 'abcf', 'abc']));
