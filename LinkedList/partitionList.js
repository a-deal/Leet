/*

Input  : <object> head
Output : <object> head

 *preserve relative ordering

function partition (head, x)
   var lesserHead = null, lesserTail = null, node = head, prev;

   while (node)
       if (node.val < x)
           var temp = node
           while (temp.next.val < x)
               temp = temp.next;

           if (!lesserHead || lesserTail)
               lesserHead = lesserHead ? node : lesserHead;
               lesserTail = lesserTail ? temp : lesserTeail;
           else
               lesserTail.next = node;
               lesserTail = temp;

           if (!prev)
               head = temp.next;
               node = temp.next;
           else
               prev.next = temp.next;
               node = temp.next
       else
           prev = node;
           node = node.next

       lesserTail.next = head;

       return lesserHead

*/
var partition = function(head, x) {
   if (!head) return null;
   var lesserHead = null, lesserTail = null, node = head, prev;

   while (node) {
       if (node.val < x) {
           var temp = node;

           while (temp.next && temp.next.val < x){
               console.log(temp.val)
               temp = temp.next;
           }

           if (!lesserHead || !lesserTail) {
               lesserHead = node
               lesserTail = temp;
           } else {
               lesserTail.next = node;
               lesserTail = temp;
           }

           if (!prev) {
               head = temp.next;
               node = temp.next;
           } else {
               prev.next = temp.next;
               node = temp.next
           }
       } else {
           prev = node;
           node = node.next
       }
   }
   if (lesserTail) {
       lesserTail.next = head;
       return lesserHead
   } else {
       return head;
   }
};
