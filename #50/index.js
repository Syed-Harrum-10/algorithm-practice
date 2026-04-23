class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // problem 1

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // problem 2

  hasCycle() {

    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    
    return false;

    }

  // problem 3

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow ? slow.value : null;
  }

  // problem 4

  removeAt(index) {
    if (index === 0) return this.removeFirst();
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      if (counter === index - 1) {
        let removed = current.next.value;
        current.next = current.next.next;
        return removed;
      }
      counter++;
      current = current.next;
    }
    return null;
  }

  // problem 5

  insertAt(index, value) {
    if (index === 0) return 'no index found'
    let current = this.head 
    let counter = 0
    
    while (current !== null) {
        if(counter === index - 1) {
            current = current.next
        }
    }

    counter ++
    current = current.next

  }

}

let lists = new LinkedList();
lists.reverse();
