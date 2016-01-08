var binaryTreePaths = function(root) {

    var paths = [];

    if (root === null) return paths;

    function findPaths (node, path) {
        path += node.val;
        if (node.left === null && node.right === null) {
            paths.push(path);
        } else {
            path += '->'
            if (node.left !== null) {
                findPaths(node.left, path);
            }
            if (node.right !== null) {
                findPaths(node.right, path);
            }
        }
    }
    findPaths(root, '');

    return paths;

};
