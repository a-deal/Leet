/*

 BSTIterator => inorder traversal of tree saved to a list (inorder)

 hasNext => check if inorder list is not empty

 next() => return current element, increment current variable

 current => pointer to current smallest element

 */
var BSTIterator = function(root) {
    var self = this;
    self.stack = [root], self.inorder = [], self.current = 0;

    while (root !== null && self.stack.length > 0) {
        var root = self.stack[self.stack.length - 1];

        while (root.left !== null) {
            var temp = root.left;
            root.left = null;
            self.stack.push(temp);
            root = temp;
        }

        root = self.stack.pop();
        self.inorder.push(root.val)

        if (root.right !== null) {
            self.stack.push(root.right);
        }

    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.current < (this.inorder.length);
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var result = this.inorder[this.current];
    this.current += 1;
    return result;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
