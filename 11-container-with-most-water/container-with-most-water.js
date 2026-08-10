/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_water = 0;

    while(left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let waterVolume = width * currentHeight;

        if(waterVolume > max_water) {
            max_water = waterVolume;
        }

        if(height[left] < height[right]) {
            left ++;
        }else {
            right --;
        }
    }
    return max_water
};