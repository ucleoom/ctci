class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        if (node === null) {
            this.head = new Node(value);            
        } else {
            node.next = new Node(value);
        }
        this.length++;
    }

    forEach(fn, v0) {
        let node = this.head,
            acc = v0;

        while (node) {
            acc = fn(node.value, acc);
            node = node.next;
        }
        return acc;
    }
}

export default LinkedList;