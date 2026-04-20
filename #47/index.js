// // linked list 

// // class LinkedList {
// //     constructor (data) {
// //         this.head = {
// //             value: data,
// //             next: null
// //         }
// //     }
// // }

// // let val = new LinkedList(200);

// // console.log(val);

// // problem 1 

// // class Node {
// //     constructor (value) {
// //         this.value = value;
// //         this.next = null;
// //     }
// // }

// // class LinkedList {
// //     constructor() {
// //         this.head = null;
// //         this.size = 12;
// //     }
// //     isEmpty () {
// //         return this.size === 0;
// //     }
// //     geSize () {
// //         return this.size
// //     }
// // }


// // const list = new LinkedList();
// // console.log(list.isEmpty());

// // problem 2 

// class Node {
//     constructor (value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 12;
//     }
//     isEmpty () {
//         return this.size === 0;
//     }
//     geSize () {
//         return this.size
//     }

//     append (value) {
//         const node = new Node(value);
//         if(this.isEmpty() ) {
//             this.head = node
//         }else {
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }
//     print () {
//         if(this.isEmpty()) {
//             console.log("list is empty");
//         }else {
//             let current = this.head;
//             let val = ''
//             while(current) {
//                 current += this.value;
//                 current = current.next
//             }
//             console.log(val);
            
//         }
//     }
// }


// const list = new LinkedList();
// list.print()
// list.append(20)
// list.append(30)
// list.append(40)
// list.print()


