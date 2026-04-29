// problem 1

// class node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor () {
//         this.head = null
//     }
//     append (value) {
//         let val = new node(value);
//         if(this.head === null) {
//             this.head = val;
//         }
//         let current = this.head
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = new node
//     }
// }


// let list = new linkedList();
// list.append(10);
// list.append(20);
// list.append(30);

// console.log(list);


// problem 2 

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// let val1 = new Node(5);
// let val2 = new Node(15);
// let val3 = new Node(25);

// val1.next = val2;
// val2.next = val3;

// console.log(val1);

// problem 3 

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(value) {
//     const newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;

//     while (current.next !== null) {
//       current = current.next;
//     }

//     current.next = newNode;
//   }

//   print() {
//     let current = this.head;

//     while (current !== null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }