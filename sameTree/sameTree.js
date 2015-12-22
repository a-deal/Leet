var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.val === q.val) {
        var left = isSameTree(p.left, q.left);
        var right = isSameTree(p.right,q.right);
        return left && right;
    } else {
        return false;
    }
};
