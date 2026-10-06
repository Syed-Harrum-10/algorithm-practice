/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function  (hand, groups) {
    if(hand.length % groups !== 0) {
        return false;
    }
    let frequence = new Map();

    for(let count of hand) {
        frequence.set(count, (frequence.get(count) || 0) + 1);
    }

    let sort = [...frequence.keys()].sort((a, b) => a - b);

    for(let key of sort) {
        while(frequence.get(key) > 0) {
            for(let j = 0; j < groups; j ++) {
                if(!frequence.get(key + j)) return false;
                frequence.set(key + j, frequence.get(key + j) - 1)
            }
        }
    }
    return true;

}
