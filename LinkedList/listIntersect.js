/*

Input  : <object> headA, <object> headB
Output : <object> intersect

// Find the lengths of both
// If lists are of equal length
    // Iterate comparing each reference to the current node
// If unequal, iterate on longer list until offset sets pointer equidistant for tail for shorter list
   // Iterate comparing each reference to current node

*/
var findListLength = function (list) {
    var length = 0;
    while(list) {
        length++;
        list = list.next;
    }
    return length;
}

var findIntersect = function (listA, listB) {
    while (listA && listB) {
        if (listA === listB) return listA
        listA = listA.next;
        listB = listB.next;
    }
    return null;
}

var getIntersectionNode = function(headA, headB) {
    var lengthA = findListLength(headA), lengthB = findListLength(headB);

    while (lengthA !== lengthB) {
        if (lengthA > lengthB) {
            headA = headA.next;
            lengthA--;
        } else {
            headB = headB.next;
            lengthB--;
        }
    }

    return findIntersect(headA, headB);
};
