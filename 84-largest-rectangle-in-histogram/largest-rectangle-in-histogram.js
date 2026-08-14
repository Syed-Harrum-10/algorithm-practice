/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for(let i = 0; i <= heights.length; i++) {
        let current = (i === heights.length) ? 0 : heights[i];


        while(stack.length > 0 && current < heights[stack[stack.length - 1]]) {

            let indexPop = stack.pop();
            let height = heights[indexPop];

            let width;


            if(stack.length === 0) {

                width = i;
            } else {
                let leftBoundry = stack[stack.length - 1];
                width = i - leftBoundry - 1;
            }

            let area = height * width;
            if(area > maxArea) {
                maxArea = area;
            }
        }
        stack.push(i);
    }
    return maxArea;
};