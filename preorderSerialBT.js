var isValidSerialization = function(P) {
    var parents = [], children = [], P = P.split(','), root = P[0];

    if ( P[0] === '#' && P.length === 1) return true;

    for (var i = 0; i < P.length; i++) {
        var curr = P[i];

        if (curr !== '#' && parents.length > 0) {
            children[parents.length - 1] = children[parents.length - 1] === undefined ? 1 : children[parents.length - 1] + 1;
            parents.push(curr)
        } else if (curr !== '#') {
            parents.push(curr)
        } else if (parents.length > 0) {
            if (children[parents.length - 1] >= 2) {
                return false;
            } else {
                children[parents.length - 1] = children[parents.length - 1] === undefined ? 1 : children[parents.length - 1] + 1;
            }

        }

        while (parents.length > 0 && children[parents.length - 1] === 2) {
            parents.pop();
            children.pop();
        }

        if(parents.length === 0 && (i + 1) !== P.length) {
            return false;
        }
    }

    while (parents.length > 0) {
        if (children.pop() !== 2) return false;
    }
    return parents.length === children.length;
};
