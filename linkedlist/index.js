// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prevNode = this.head;
        let currentNode = this.head.next;

        while (currentNode.next) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = new Node(data);
        } else {
            lastNode.next = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        return null;

        // while (counter < index) {
        //     if (!currentNode.next) {
        //         return null;
        //     } else {
        //         currentNode = currentNode.next;
        //         counter++;
        //     }
        // }
        // return currentNode;
    }

    // removeAt(index) {
    //     if (this.size() < index + 1) {
    //         return;
    //     }
    //     let prevNode = this.getAt(index - 1);
    //     let nextNode = this.getAt(index + 1);

    //     if (index === 0) {
    //         this.head = nextNode;
    //         return;
    //     }
    //     prevNode.next = nextNode;
    // }

    /** teacher's version */
    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) return;
        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        if (this.size() < index + 1) {
            this.insertLast(data);
            return;
        }
        let newNode = new Node(data);
        let prevNode = this.getAt(index - 1);
        let nextNode = this.getAt(index);

        prevNode.next = newNode;
        newNode.next = nextNode;
    }

    forEach() {}
}

const l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
console.log("l :>> ", l);
l.getAt(0).data;
l.getAt(1).data;

// l.insertFirst(10);
// l.insertFirst(11);
// l.insertFirst(12);
// console.log("l :>> ", l);

module.exports = { Node, LinkedList };
