class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);

n1.next = n2;
n2.next = n3;

let current = n1;

// problem 1 

while (current !== null) {
    console.log(current.value);
    current = current.next
}

// problem 2 

while (current !== null) {
    
    if(current.value === 20) {
        return true
    }
    current = current.next
}
return false

// problem 3 

let current = n1;
let count = 0;

while (current !== null) {
    count ++
    current = current.next
}

console.log(count)

// problem 4 

let current = n1;

while(current !== null) {
    current = current.next
}

console.log(current.value);

// problem 5 

let current = n1

while(current !== null) {
    current = current.next
}
current.next = new Node(12);

// problem 6 

n1 = n1.next; 

let current = n1;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}

// problem 7 


while(current.next.next !== null) {
    current = current.next
}
current.next = null

// problem 8 

while(fast !== null && fast.next !== null) {
    slow = slow.next        
    fast = fast.next.next   
}
console.log(slow.value);