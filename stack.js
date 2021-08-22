/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    // Add 1 to length
    this.size += 1;
    // Point current tail to new tail/ new node
    this.tail.next = newNode;
    // Update tail and set it to newNode
    this.tail = newNode;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()) throw 'Stack is empty';
    let currentNode = this.first;
    while(currentNode) {

    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false; 
  }
}

module.exports = Stack;
