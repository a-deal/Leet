/*

 Input  : <object> root, <int> sum
 Output : <2d-array> paths

function pathSum (root, sum)
    let paths = []

    function findPaths (root, path)
        if (root === null)
            return;
        else if (root.left === null && root.right === null && !(sum - root.val))
            paths.push(path.concat([root.val])
            return;

        if (root.left)
            findPaths(root.left, path.concat([root.val]))

        if (root.right)
            findPaths(root.right)

    return paths
 */
 var pathSum = function(root, sum, path, paths) {
    paths = paths || [], path = path ||[]

    if (root !== null) {
        if (root.left === null && root.right === null && !(sum - root.val))
            paths.push(path.concat([root.val]));

        pathSum(root.left, sum - root.val, path.concat([root.val]), paths);
        pathSum(root.right, sum - root.val, path.concat([root.val]), paths);
    }

    return paths;
};
