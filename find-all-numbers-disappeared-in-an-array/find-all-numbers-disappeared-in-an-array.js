/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
  let map = {}
  let res = []
  
    for(let i = 0; i < nums.length; i++){
      if(!map[nums[i]]) {
          map[nums[i]] = true
      }
  }
    
    for(let i = 1; i <= nums.length; i++){
       if(i in map){
           continue
       } else{
           res.push(i)
       }
       
    }
    return res
    
};


