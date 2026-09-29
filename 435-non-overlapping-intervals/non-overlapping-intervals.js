/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    let sort = intervals.sort((a, b) => a[1] - b[1]);
    let prevEnd = intervals[0][1];
    let result = [];
    let count = 0;

    for (let i = 1; i < sort.length; i++) {
        if (sort[i][0] < prevEnd) {
            count++;
        } else {
            prevEnd = sort[i][1];
        }
    }
    
    return count;

}