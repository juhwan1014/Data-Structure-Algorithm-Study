/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [2,7,11,15]

const twoSum = (nums, target) => {
    const map = {};
    
    for(let i = 0; i < nums.length; i++){
       let partner = target - nums[i]
       
       if (partner in map){
          return [map[partner], i]
       }
      
        map[nums[i]] = i ;
        
    }
    
    return null
}





// var twoSum = function(nums, target){
// for(let i = 0; i < nums.length; i++){
//  for(let j = i+1; j < nums.length; j++){
//      if(nums[i] + nums[j] == target){
//         return [i, j] 
//      }
//  }
// }
//     return null
// }