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
        // this.head = new Node(data, this.head);
        this.insertAt(data, 0);
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
        return this.getAt(0);
    }

    getLast() {
        // if (!this.head) return null;

        // let currentNode = this.head;
        // while (currentNode.next) {
        //     currentNode = currentNode.next;
        // }
        // return currentNode;
        return this.getAt(this.size() - 1);
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
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // if (this.size() < index + 1) {
        //     this.insertLast(data);
        //     return;
        // }
        // let newNode = new Node(data);
        // let prevNode = this.getAt(index - 1);
        // let nextNode = this.getAt(index);
        // prevNode.next = newNode;
        // newNode.next = nextNode;

        /** teacher's version */
        const prevNode = this.getAt(index - 1) || this.getLast(); //if insert index is out of bound
        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    /** for...of... */
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

const l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
// console.log("l :>> ", l);
l.getAt(0).data;
l.getAt(1).data;

console.log("----forEach-----");
l.forEach((node) => {
    console.log(node.data);
    node.data += 10;
});
// console.log(l);

console.log("----for...of...----");
for (let node of l) {
    console.log(node.data);
}

module.exports = { Node, LinkedList };

/** Generator example */
class Tree {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }

    *printValues() {
        yield this.value;
        for (let child of this.children) {
            yield* child.printValues();
        }
    }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);
const values = [];

for (let value of tree.printValues()) {
    values.push(value);
}
// console.log(values);
