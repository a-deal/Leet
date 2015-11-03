var invertTree = function(root) {
    invert(root);
    return root;
};

var invert = function (node) {
        if (node === null) {
            return;
        }
        if (node.left !== null && node.right !== null) {
            swap(node);
            invert(node.right) || invert(node.left)
        } else if (node.left === null) {
            swapLeft(node);
            invert(node.left);
        } else if (node.right === null) {
            swapRight(node);
            invert(node.right)
        }
    }

 var swap = function (node) {
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
  }

var swapLeft = function (node) {
        node.left = node.right;
        node.right = null;
  }

var swapRight = function (node) {
    node.right = node.left;
    node.left = null;
  }
