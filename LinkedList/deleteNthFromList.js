var removeNthFromEnd = function(head, n) {
    var kth = head, offset = head;
    while (n !== 0) {
        offset = offset.next;
        n--;
    }
    if (!offset) return head.next
    while (offset.next) {
        offset = offset.next
        kth = kth.next
    }
    kth.next = kth.next ? kth.next.next : null;
    return head;
};
