/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//        if(nums.length == 0) return 0;
//     let result = Number.MIN_SAFE_INTEGER;
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         sum = sum < 0 ? 0 : sum;
//         result = Math.max(sum, result);
//     }
    
    
//     return result;
// };


//Using DP
var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums);
};