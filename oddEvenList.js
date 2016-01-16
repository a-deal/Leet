var oddEvenList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var lastOdd = head, firstEven = head.next, lastEven = head.next, count = 3, node = head.next.next;

    while (node !== null) {
        console.log(count & 1);
        if ((count & 1) === 1) {
            lastOdd.next = node;
            lastEven.next = node.next;
            lastOdd = node;
            lastOdd.next = firstEven;
            node = lastEven;
        } else if ((count & 1) === 0) {
            lastEven.next = node;
            lastEven = node;
        }
        count++;
        node = node.next;
    }
    return head;
};