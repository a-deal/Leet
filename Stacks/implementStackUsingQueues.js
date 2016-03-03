var Stack = function() {
    this.length = 0;
    this._storage = [];
};

Stack.prototype.push = function(x) {
    this._storage[this.length] = x;
    this.length++;
};

Stack.prototype.pop = function() {
    if (this.length > 0) this.length--;

    var temp = this._storage[this.length];
    delete this._storage[this.length];

    return temp;
};

Stack.prototype.top = function() {
    return this._storage[this.length - 1];
};

Stack.prototype.empty = function() {
    return this.length > 0 ? false : true;
};
