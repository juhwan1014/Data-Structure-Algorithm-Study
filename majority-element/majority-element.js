/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = {}
    let max = 0
    let res = 0
    
    for(let i = 0; i < nums.length; i++){
       if(map[nums[i]]){
             map[nums[i]]++ 
       } else{
           map[nums[i]] = 1
       }
    }
    var values = Object.values(map)
    
    for(let i = 0; i<values.length; i++){
          max = Math.max(max, values[i])
    }
     
    return Object.keys(map).find(key => map[key] === max)
  
    
};