/**

Input: <string>
Output: <string>

1. Understand the Problem

Given a string, return a new string without vowels

2. Make the connection between the data and the unknown

Input string is at least 1 character and up to 1000 characters in length
Only vowels should be removed

3. Devise a plan

Initialize new string to be returned [noVowels]
For each character in the string
  If character is not a vowel
    Add character to noVowels
    
4. Evaluate Solution

Time: O(n)
Space: O(n)
*/
const VOWELS = new Set(["a", "e", "i", "o", "u"]);
let removeVowels = function(S) {
  let updated = "";

  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (!VOWELS.has(char)) {
      updated += char;
    }
  }

  return updated;
};
