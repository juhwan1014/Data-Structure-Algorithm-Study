/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] >= target){
//             return i;
//         }
//     }
//     return nums.length;
// };


var searchInsert = function(nums, target) {
    var right = nums.length - 1;
    var left = 0;
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    
    return target > nums[left] ? left + 1 : left;
};