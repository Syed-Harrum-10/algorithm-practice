// problem 1

// class node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//   }
//   append(value) {
//     let val = new node(value);
//     if (this.head === null) {
//       this.head = val;
//     }
//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = new node();
//   }

//   problem 1 

//   prepend(value) {
//     let newVal = new node(value);
//     newVal.next = this.head;
//     this.head = newVal;
//   }

//   problem 2

//   removeFirst() {
//     let remove = this.head;
//     this.head = this.head.next;
//     return remove.value;
//   }

//   problem 3

//   removeLast() {
//     let removeLast = this.head;
//   }

//   problem 4

//   contains(value) {
//     let current = this.head;

//     while (current !== null) {
//       if (current.value === value) {
//         return true;
//       }

//       current = current.next;
//     }

//     return false;
//   }

//   problem 5

//   length() {
//     let current = this.head;
//     let count = 0;

//     while (current !== null) {
//       count++;
//       current = current.next;
//     }

//     return count;
//   }

//   problem 6

//   getAt(index) {

//     if (index < 0) return null;

//     let current = this.head;
//     let counter = 0;

//     while (current !== null) {
//       if (counter === index) {
//         return current;
//       }
//       counter++;
//       current = current.next;
//     }

//     return null;
//   }

//   reverse(value) {
//     let head = this.head
//     while (head !== null) {
        
//     }
//   }

// }

// let list = new linkedList();
// list.append(12);

// console.log(list.contains(12));
