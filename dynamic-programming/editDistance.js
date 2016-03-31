"use strict";

var initializeGrid = function (word1, word2) {
    var grid = [];
    for (var i = 0; i <= word1.length; i++) {
      grid.push([]);
      for (var j = 0; j <= word2.length; j++) {
        if (i === 0) {
          grid[i][j] = j;
        } else if (j === 0) {
          grid[i][j] = grid[i - 1] === undefined ? 0 : grid[i - 1][j] + 1;
        } else {
          grid[i][j] = 0;
        }
      }
    }
    return grid;
}

var replaceCost = function (char1, char2) {
  return char1 === char2 ? 0 : 1;
}


var minDistance = function( word1, word2 ) {
  var grid = initializeGrid(word1, word2);
  for (var i = 1; i < grid.length; i++) {
    for (var j = 1; j < grid[i].length; j++) {
      var top = grid[i - 1][j] + 1;
      var left = grid[i][j - 1] + 1;
      var topLeft = grid[i - 1][j - 1] + replaceCost(word1[i - 1], word2[j - 1]);
      grid[i][j] = Math.min( top, left, topLeft )
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

function assertEquals(expected, actual) {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected [" + expected + "] but was [" + actual + "]");
  }
}

assertEquals(1, minDistance('a', 'ab'));
// assertEquals(2, minDistance('boom', 'moob'));
// assertEquals(1, minDistance('word1', 'word2'));
