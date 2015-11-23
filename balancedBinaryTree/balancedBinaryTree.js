var isBalanced = function(root) {

    return findBalance(root) === undefined ? true : false;

};
function findBalance (root) {

        if (root === null ||(root.left === null && root.right === null)) return;

        if (root.left === null || root.right === null) {
            if(depth(root) > 1) return false;
        } else if (Math.abs(depth(root.right) - depth(root.left)) > 1) {
            return false;
        }

        if (root.right !== null && findBalance(root.right) !== undefined) return false;

        if (root.left !== null && findBalance(root.left) !== undefined) return false;

    }

function depth (node) {
    var longest = 0;

    (function depthFinder(node, depth) {
        if (depth > longest) longest = depth;

        if (node.right !== null) depthFinder(node.right, depth + 1);

        if (node.left !== null) depthFinder(node.left, depth + 1);
    })(node, 0);

    return longest;
}
