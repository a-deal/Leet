// Time Complexity is O(n log n) because at the very least this algorithm will
// need to iterate through the entire list once thus forming a basis of number of operations
// equaling the size of the input. The inner loop adds to the existing
// time complexity but with a decreasing number of operations per loop. Accordingly,
// the total number of operations will not equal a n^2 time complexity. A decreasing
// number of iterations per loop points to a logarithmic time complexity which, on top
// of a linear basis, adds to a O(n log n) time complexity. Q.E.D.

/*

///////////////// Naive Approach ////////////////////

var reverseList = function(head) {
    var node = head, newHead, tail;

    if (head === null || head.next === null) return head;

    while (node !== null) {
        if (node.next === null) {
            tail.next = node;
            node = null;
        }
        for (var n = node; n !== null; n = n.next) {
         if (n.next.next === null && newHead === undefined) {
                newHead = n.next;
                tail = newHead;
                n.next = null;
            } else if (n.next.next === null) {
                tail.next = n.next;
                tail = tail.next;
                n.next = null;
            }
        }
    }

    return newHead;
};
*/

/*

//////////// Refactored Approach

TC : O(n)
SC : O(1)

*/

var reverseList = function(head) {
    var newHead = null;
    while (head !== null) {
        var current = head;
        head = head.next;
        current.next = newHead;
        newHead = current;
    }
    return newHead;

};
