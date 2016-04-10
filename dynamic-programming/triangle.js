/*

Input  : <2d-array> triangle
Output : <int> minSum

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

[
     [2],
    [5,6],
   [11,10,13],
  [12,11,18,16]
]


minimumTotal (triangle)

  for i in triangle
    for j in triangle
*/

var minimumTotal = function(triangle) {
    var minTriangle = [],
        minPath = Infinity,
        lastRow = triangle[triangle.length - 1];

    for (var i = 0; i < triangle.length; i++) {
      for (var j = 0; j < triangle[i].length; j++) {
        var left, right, current = triangle[i][j];
        if (triangle[i - 1] !== undefined) left = triangle[i - 1][j - 1]
        if (triangle[i - 1] !== undefined) right = triangle[i - 1][j]
        triangle[i][j] = findMin(current, left, right);
      }
    }
    for ( i = 0; i < lastRow.length; i++) {
      if (lastRow[i] < minPath) minPath = lastRow[i];
    }
    return minPath
};


function findMin (current, left, right) {
  if (right !== undefined && left !== undefined) {
    return current + Math.min(right, left);
  } else if (right !== undefined) {
    return current + right;
  } else if (left !== undefined) {
    return current + left;
  } else {
    return current;
  }
}

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

var example = [
     [2]
]

assertEquals(2, minimumTotal(example))
