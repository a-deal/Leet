var Queue = function() {
    this.inbox = [];
    this.outbox = [];
};


Queue.prototype.push = function(x) {
    this.inbox.push(x);
    this.length++;
};

Queue.prototype.pop = function() {

    if (this.outbox.length > 0) {
        return this.outbox.pop();
    } else {
        while (this.inbox.length > 0) {
            this.outbox.push(this.inbox.pop());
        }
        return this.outbox.pop();
    }

};

Queue.prototype.peek = function() {
  if (this.outbox.length > 0) {
    return this.outbox[this.outbox.length - 1];
  } else {
    return this.inbox[0];
  }
};

Queue.prototype.empty = function() {
    if (this.inbox.length > 0 || this.outbox.length > 0) {
        return false;
    } else {
        return true;
    }
};
