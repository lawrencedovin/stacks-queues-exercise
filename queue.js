/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  traverse() {
    let currentNode = this.first;
    while(currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    // Point current tail to new tail
    this.last.next = newNode;
    // The update to new tail
    this.last = newNode;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;

let fruits = new Queue();

fruits.enqueue('tomato');
fruits.enqueue('mango');
fruits.enqueue('apple');

fruits.traverse();