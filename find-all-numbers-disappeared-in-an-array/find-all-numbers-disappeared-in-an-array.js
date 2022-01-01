/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
    
//   let map = {}

//     for(let i = 0; i < nums.length; i++){
//       if(!map[nums[i]]) {
//           map[nums[i]] = true
//       } 
//   }
    
//     // map ={1: true, 2:true , 3:true, 4:true, 7:true ,8:true}
    
//     for(let i = 1; i <= nums.length; i++){
//        if(i in map) 
//           delete map[i]
//        else      
//            map[i] = false
//     }
    
// return Object.keys(map)
  
    
// };


var findDisappearedNumbers = (nums) => {
    let map = {}
    
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = true
        }
    }
    
  for(let i = 1; i <= nums.length; i++){
      if(i in map){
          delete map[i]
      } else
          map[i] = false
  }
   
    return Object.keys(map)
   
    
}

















