var mergeTwoLists = function(l1, l2) {
    var l3;
    var tail;

    function merger (l1, l2) {

        if (l1 === null && l2 === null) {
            if (l3 === undefined) l3 = null;
            return;
        } else if (l1 !== null && l2 !== null) {

            //Find the smaller node
            if (l1.val < l2.val) {
                if (l3 === undefined){
                    l3 = l1;
                    tail = l3;
                } else {
                    tail.next = l1;
                    tail = tail.next
                }

                l1 = l1.next;
            } else {
                 if (l3 === undefined){
                    l3 = l2;
                    tail = l3;
                } else {
                    tail.next = l2;
                    tail = tail.next
                }

                l2 = l2.next;
            }

            merger(l1, l2);

        } else if (l1 !== null) {
            if (l3 === undefined){
                    l3 = l1;
            } else {
              tail.next = l1;
              l1 = null;
            }


        } else if (l2 !== null) {

           if (l3 === undefined){
                    l3 = l2;
            } else {
              tail.next = l2;
              l2 = null;
            }

        }
    }
    merger(l1,l2);


    return l3;
};
