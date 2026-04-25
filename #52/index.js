class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(value) { 
        const newNode = new Node(value)

          if (!this.head) {
        this.head = newNode;
        return;
        }

        let current = this.head;
        while(current !== null) {
            current = current.next
        }

        current.next = newNode
    }

    print() { 
        let current = this.head
        while (current !== null) {
            console.log(current.value);
            current = current.next
        }
    }

    removeFirst() {
    if (!this.head) {
        return null; 
    }
    this.head = this.head.next;
    }   

    removeLast() {

    if (!this.head) {
        return;
    }

    if (!this.head.next) {
        this.head = null;
        return;
    }

    let current = this.head;
    while (current.next.next !== null) {
        current = current.next;
    }

    current.next = null;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next
            current.next = prev
            prev = current 
            current = next
        }
        this.head = prev
    }

}