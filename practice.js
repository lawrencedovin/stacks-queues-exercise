class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } 
        // If tail exists point current tail's next to New Node
        this.tail.next = newNode;
        // Set tail to New Node
        this.tail = newNode;
    }

    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
}

class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

let dogs = new LinkedList();
dogs.append('fido');
dogs.append('ketchup');
dogs.append('popcorn');
dogs.traverse();
console.log(dogs.search('fido'));
console.log(dogs.search('asldkla'));