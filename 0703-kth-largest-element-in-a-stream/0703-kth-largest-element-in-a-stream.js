/**
 * @param {number} k
 * @param {number[]} nums
 */
 class MyMinHeap {
    constructor() { this.heap = []; }
    push(val) { this.heap.push(val); this._bubbleUp(); }
    pop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0) { this.heap[0] = last; this._sinkDown(); }
        return top;
    }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
    _bubbleUp() {
        let i = this.heap.length - 1;
        while(i > 0) {
            let parent = Math.floor((i-1)/2);
            if(this.heap[parent] > this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else break;
        }
    }
    _sinkDown() {
        let i = 0;
        while(true) {
            let left = 2*i+1, right = 2*i+2, smallest = i;
            if(left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if(smallest !== i) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else break;
        }
    }
}

var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = new MyMinHeap();
    for(let num of nums) {
        this.minHeap.push(num);
        if(this.minHeap.size() > k) this.minHeap.pop();
    }
};

KthLargest.prototype.add = function(val) {
    this.minHeap.push(val);
    if(this.minHeap.size() > this.k) this.minHeap.pop();
    return this.minHeap.peek();
};
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */