var verifyPreorder = function (preorder) {
     var stack = [];
     var inOrder = [];

     for (var i = 0; i < preorder.length; i++) {
        if (inOrder.length > 0 && preorder[i] < inOrder[inOrder.length - 1]) {
            return false;
        }

        while (stack.length > 0 && preorder[i] > stack[stack.length - 1]) {
            inOrder.push(stack.pop())
        }
        stack.push(preorder[i]);
     }
     return true;
 }
