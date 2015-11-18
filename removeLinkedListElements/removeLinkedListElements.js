var removeElements = function(head, val) {
    var prev;
    if (head === null) return head;

    var traverse = function (node) {

     if (node === null) {
         return head;
     } else if (node.val === val) {
        while (node.val === val) {
            node = node.next;
            if (node === null) break;
        }
        if (prev !== undefined) prev.next = node;
        else {
            head = node
        }
     }
     if (node !== null) prev = node;
     if (node === null) return traverse(node)
     else {
         return traverse(node.next);
     }
    }
    return traverse(head);

};
