var isSymmetric = function(root) {
    return root === null ? true : compareTrees(root.left, root.right);
};

function compareTrees (tree1, tree2) {
    if( tree1 === null && tree2 === null ) {
        return true;
    } else if ( tree1 === null || tree2 === null ) {
        return false;
    } else if (tree1.val !== tree2.val) {
        return false;
    } else {
        return compareTrees(tree1.left, tree2.right) ? compareTrees(tree1.right, tree2.left) : false;
    }
}