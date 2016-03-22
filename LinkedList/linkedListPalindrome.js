/*
 Input : <object> head
 Output : <object> head

 1. Travel to midpoint
 2. reverse latter half
 3. match values
 4. unreverse

 isPalindrome
 */
"use strict";
const reverse = (head) => {
    var reversed;
    while (head) {
        var temp = head;
        head = head.next;
        temp.next = reversed;
        reversed = temp;
    }
    return reversed;
}

const isPalindrome = function(head) {
    var fast = head, slow = head, node = head;
    while (fast) {
        if (fast.next) {
            fast = fast.next.next;
        } else {
            fast = null;
            break;
        }
        slow = slow.next
    }
    slow = reverse(slow);
    while (slow) {
        if (slow.val !== node.val) return false;
        slow = slow.next;
        node = node.next;
    }
    return true;
};
