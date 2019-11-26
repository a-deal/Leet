/**
Input: <string>
Output: <string>

1. Understand the problem

Given a valid IP address, return it's defanged representation


2. Make the connection between the data and the unknown

IP addresses are 4 numbers ( 0 < x < 256) separated by periods

3. Devise a plan 

Initialize an empty string to return <defanged>
For each character in the given address
  If the character is a period, wrap it in [] and add it to <defanged>
Return <defanged>

4. Evaluate solution

Time: O(n)
Space: O(n)
 */
var defangIPaddr = function(address) {
  let defanged = "";

  for (let i = 0; i < address.length; i++) {
    let current = address[i];
    if (current === ".") {
      current = "[.]";
    }
    defanged += current;
  }

  return defanged;
};
