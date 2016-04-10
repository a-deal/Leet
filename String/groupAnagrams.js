/*

Input : <array> strs
Output : <2d-array> anagrams

TC : O ( n )
SC : O ( n )

 */
var groupAnagrams = function(strs) {
    var anagrams = strs.reduce(function(anagrams, curr) {
      var currentSorted = curr.split('').sort(stringSorter).join('');
      if (currentSorted in anagrams) {
        anagrams[currentSorted].push(curr);
      } else {
        anagrams[currentSorted] = [curr];
      }
      return anagrams
    }, {})
    return Object.keys(anagrams).reduce(function(memo, curr) {
      memo.push(anagrams[curr].sort(anagramSorter))
      return memo;
    }, [])
};

function stringSorter (a,b) {
  return a.charCodeAt() - b.charCodeAt();
}

function anagramSorter (a, b) {
  var j = 0;
  while (j < a.length) {
    if (a[j] === b[j]) {
      j++
    } else {
      break;
    }
  }
  return a[j] ? (a[j].charCodeAt() - b[j].charCodeAt()) : 0;
}

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

assertEquals(['cat','atc'], groupAnagrams(['cat', 'atc']));
