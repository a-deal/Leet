// Time Complexity === O(n);
// Space Complexity === O(1);

var shortestDistance = function(words, word1, word2) {
   var count = 0, lowest = Infinity, found, match;

   for (var i = 0; i < words.length; i++) {
       current = words[i];
       if (current === word1 || current === word2) {
           match = current;
       } else if (found !== undefined) {
           count++;
           continue;
       } else {
           continue;
       }
       if( match !== found && found !== undefined) {
           count++;
           lowest = count < lowest ? count : lowest;
           found = match;
           count = 0;
       } else if (match === found) {
           count = 0;
       } else if (match) {
           found = match;
       }
   }

   return lowest;
};
