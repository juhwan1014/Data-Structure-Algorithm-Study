/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {

//     let output = []
//     let map = {}
//     let map2 = {}
//     candidates.sort();
//     // map = {[2:2],[4,2],[6,2],[8:2],[10:2],[12:2],[14:2]
//                // ,[16:2],[18:0],[3:3],[6:3],[9,3],[]}
    
//     for(let i = 0; i < candidates.length; i++){
//         let element = candidates[i]
//         let diff = target
//         let count = 0
//         // if(diff == element){
//         //     output.push([element])
//         // }
//         while(diff >= element){
//          diff = diff - element
//             count++
//             if(diff in map && map[diff] != element){
//                 let result = []
//                 for(let i = 0; i < diff/map[diff]; i++){
//                     result.push(map[diff])
//                 }
//                 for(let i =0; i< count; i++){
//                 result.push(element)
//                 }
                
//                 output.push(result)
//             }
            
            
//                if(diff in map2 && map2[diff] != element){
//                 let result = []
//                 for(let i = 0; i < diff/map2[diff]; i++){
//                     result.push(map2[diff])
//                 }
//                 for(let i =0; i< count; i++){
//                 result.push(element)
//                 }
                
//                 output.push(result)
//             }
            
            
//             if(target-diff in map){
//               map2[target - diff] = element 
//                 continue
//             }
//             map[target - diff] = element 
//         }
//         if(diff == 0){
//             let result = []
//             for(let i = 0; i < count; i++){
//                 result.push(element)
//             }
//             output.push(result)
//         }
//     }
    
//     return output
// };

// // element :3
// // diff :6
// // count : 4


var combinationSum = function(candidates, target) {
    const result = [];
    
    function permute(arr=[], sum=0, idx=0) {
        if(sum > target) return;
        if(sum === target) result.push(arr);
        
        for(let i = idx; i < candidates.length; i++) {
            permute([...arr, candidates[i]], sum+candidates[i], i);
        }
    }
    permute()
    return result;
};
