var deleteDuplicates = function(head, node) {
    var node = node || head;
    if (node === null || node.next === null) {
        return head;
    }
    while (node.next !== null && node.val === node.next.val) {
        var subsequent = node.next.next;
        var duplicate = node.next;
        node.next = subsequent;
        duplicate.next = null;
    }
    return deleteDuplicates(head, node.next);
};