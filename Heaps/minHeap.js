/*

Min Heap Operations :

Insert      : O ( log n )
Extract-Min : O ( log n )

*/

"use strict";

var MinHeap = function () {
  this.items = [];
}

MinHeap.prototype.insert = function (item) {
  let items = this.items, length = items.length;
  items.push(item)
  if (length) {
    this.bubbleUp(length);
  }
}

MinHeap.prototype.extractMin = function () {
  let items = this.items,
     length = items.length;
  if (length === 1) return items.shift();
  let end = items.pop(),
      min = items[0];
  items[0] = end;
  this.sinkDown(0);
  return min;
}

MinHeap.prototype.bubbleUp = function (child) {
  let parent = child % 2 === 0 ? Math.floor( child / 2 ) - 1 : Math.floor ( child / 2 ),
       items = this.items,
       length = items.length;
  while (length && items[child] < items[parent]) {
    swap(items, parent, child)
    child = parent;
    parent = child % 2 === 0 ? Math.floor( child / 2 ) - 1 : Math.floor ( child / 2 );
  }
}

MinHeap.prototype.sinkDown = function (parent) {
  let items = this.items,
     length = items.length,
       left = Math.floor( parent * 2 ) + 1,
      right = Math.floor( parent * 2 ) + 2;

  while (length > 1 && (items[parent] > items[left] || items[parent] > items[right])) {
    let toSwap;
    if (items[right] === undefined) toSwap = left;
    else toSwap = items[left] < items[right] ? left : right;
    swap(items, parent, toSwap);
    parent = toSwap;
      left = Math.floor( parent * 2 ) + 1;
     right = Math.floor( parent * 2 ) + 2;
  }
}

const swap = (heap, i, j) => {
  let temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}
const assertEquals = (expected, actual) => {
  if(expected === actual) {
    console.log(expected + " === " + actual + " OK");
  } else {
    console.log("Expected \n[" + expected + "] but was \n[" + actual + "]");
  }
}

let minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);

assertEquals(1, minHeap.extractMin());
minHeap.insert(10);
assertEquals(2, minHeap.extractMin());
minHeap.insert(5);
minHeap.insert(5);
assertEquals(3, minHeap.extractMin());
minHeap.insert(6);
assertEquals(5, minHeap.extractMin());
assertEquals(5, minHeap.extractMin());
assertEquals(6, minHeap.extractMin());
assertEquals(1, minHeap.items.length);
