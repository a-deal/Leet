var mergeTwoLists = function(l1, l2, l3, tail) {
   var next;
    if (l1 === null && l2 === null) {
        if (l3 === undefined) l3 = null;
        return l3;
    } else if (l1 !== null && l2 !== null) {

        //Find the smaller node
        if (l1.val < l2.val) {
            next = l1;
            l1 = l1.next;
        } else {
            next = l2;
            l2 = l2.next;
        }

        if (l3 === undefined){
            l3 = next;
            tail = l3;
        } else {
            tail.next = next;
            tail = tail.next
        }

        return mergeTwoLists(l1, l2, l3, tail);

    } else if (l1 !== null) {
        if (l3 === undefined){
                l3 = l1;
        } else {
          tail.next = l1;
          l1 = null;
        }
        return l3;

    } else if (l2 !== null) {

       if (l3 === undefined){
                l3 = l2;
        } else {
          tail.next = l2;
          l2 = null;
        }
        return l3;
    }


};
