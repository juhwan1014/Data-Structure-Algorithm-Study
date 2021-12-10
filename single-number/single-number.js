/**
 * @param {number[]} nums
 * @return {number}
 */
//내코드
var singleNumber = function(nums) {
    let map = {}
    let res = []
   
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in map) 
            map[nums[i]] = true
        else 
             map[nums[i]] = false
    }
    console.log(map)
    for(let i = 0; i < nums.length; i++){
        
        if(map[nums[i]] === false)
            return nums[i]
        else 
            continue
    }
    
};