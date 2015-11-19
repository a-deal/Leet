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
