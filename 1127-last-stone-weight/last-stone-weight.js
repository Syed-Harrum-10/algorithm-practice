/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function  (stones) {
    while(stones.length > 1) {
        let sort = stones.sort((a, b) => a - b);
        let y = stones.pop();
        let x = stones.pop();

        if(y !== x) {
            stones.push(y - x);
        }
    }
    return stones.length === 0 ? 0 : stones[0];
}