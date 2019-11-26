/*

Input: <string>
Output: <number>

1. Understand the problem

1.1 Given a roman numeral string, return its numerical (in decimal) value.

- RNs run left to right, largest to smallest
- Exceptions center around aggregates where a smaller numeral is followed by a larger one signifying a single value
  IV (4)
  IX (9)
  XL (40)
  XC (90)
  CD (400)
  CM (900)
  
  Note: in all cases, I is followed by V or X, X by L or C, C  by D or M

1.2 Edge cases / Boundaries

- Given numerals are between 1 and 3999
- Given numerals are assumed to be valid

2. Make the connection between the data and the unknown

- The data are numeral primitives we know ahead of time
- Primitives run large to small, except when it is a aggregate where a smaller numeral is followed by a larger one

3. Devise a plan

Initialize a count variable which is the numerical value to be returned.
Iterate through the input string
  if the current numeral is smaller than the next numeral
    Check if current numeral can be added to next numeral
      If yes, 
        Increment count with the sum of these two numbers together
        Update iterator to skip to i + 2 position if it exists
      If no
        Throw exception
  else
    Increment count with the numeral's numerical value

4. Evaluate Solution

Time to completion: 40 mins
Time Complexity: O(n)
Space Complexity: O(1)
 */

function retrieveValue(numeral) {
  switch (numeral) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

var romanToInt = function(s) {
  let numericalValue = 0;

  for (let i = 0; i < s.length; i++) {
    let current = retrieveValue(s[i]);
    let next = retrieveValue(s[i + 1]);
    if (next > 0 && current < next) {
      numericalValue += next - current;
      i += 1;
      continue;
    } else {
      numericalValue += current;
    }
  }

  return numericalValue;
};
