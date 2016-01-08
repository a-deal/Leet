var isAnagram = function(s, t) {
  var first = {},
     second = {},
     char1,
     char2;

  if (s.length !== t.length) {
      return false;
  }

  //Loop through first string and second string
  for (var i = 0; i < s.length; i++) {
     char1 = s[i];
     char2 = t[i];

     //Store each letter and letter count
      if (first[char1]) {
          first[char1]++;
      } else {
          first[char1] = 1;
      }
      if (second[char2]) {
          second[char2]++;
      } else {
          second[char2] = 1;
      }
  }

  //Compare hashes to find mismatches
  for (var char in first) {
      if (char in second === undefined || second[char] !== first[char]){
          return false;
      }
  }
  return true;
}
