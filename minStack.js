/**
 * @constructor
 */
var MinStack = function() {
    this.stack = [];
    this.min = [];
    this.length = 0;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.length++;
    if (x <= this.min[this.min.length - 1] || this.min.length === 0) {
        this.min.push(x);
    }
    return this.stack.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var popped = this.stack.pop();
    this.length--;

    if (popped === this.min[this.min.length - 1]) {
        this.min.pop();
    }
    return popped;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};
