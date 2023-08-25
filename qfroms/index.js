// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

/**
 * 題目的意思是將 stack 堆疊的資料，讓它能夠像 Queue 一樣使用先進先出的概念處理。
 * 這時候就需要第二個空的 stack，把第一個 stack 堆疊的資料先搬到第二個，
 * 將目標資料移出後，再將資料從第二個 stack 搬回第一個。
 */

const Stack = require("./stack");

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
}

module.exports = Queue;
