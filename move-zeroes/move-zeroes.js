/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0   
    for(let i = 0; i < nums.length; i++){
     if(nums[i] !== 0){
         if(count === 0){
            continue
         }
         nums[i - count] = nums[i]
         nums[i] = 0
     } else {
         count ++
     }
    }
    return nums
};
 


// What count means is the number of zeros so far.



// var moveZeroes = (nums) => {
//     let index = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== 0){
//             nums[index] = nums[i]
//             index++
//         }
//     }
    
//     for(let i = index; i < nums.length; i++){
//         nums[i] = 0 
//     }
//     return nums
// }


