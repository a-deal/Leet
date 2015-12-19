var deleteNode = function(node) {
    if (node.next === null) {
        return;
    } else {
        var prev;
        while (node.next !== null) {
            node.val = node.next.val;
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
};
