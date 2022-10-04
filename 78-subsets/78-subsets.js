/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     let result = [];
//     dfs([], 0);
    
//     function dfs(current, index){
//         result.push(current);
//         for(let i = index; i < nums.length; i++) {
//             dfs(current.concat(nums[i]), i + 1);
//         }
//     }
    
//     return result;
// };

// function subsets(nums) {
// 	const result = [];
// 	dfs([], 0);

// 	function dfs(slate, index) {
// 		result.push(slate);
// 		for (let i = index; i < nums.length; i++) {
// 			dfs([...slate, nums[i]], i + 1);
// 		}
// 	}

// 	return result;
// }

// var subsets = function(nums) {
//     function findSubset(arr,temp){
//             res.push([...temp])
//         for(let i=0;i<arr.length;i++){
//             temp.push(arr[i])
//             findSubset(arr.slice(i+1),temp)
//             temp.pop()
//         }
//     }
    
//     let res = []
//     findSubset(nums,[])
//     return res
// };

var subsets = function(nums) {
    var res = [];
    function dfs(nums, index, path, res){
        res.push([...path]);
        for(var i=index; i<nums.length; i+=1){
            path.push(nums[i]);
            dfs(nums, i+1, path, res);
            path.pop();
        }
    }
    dfs(nums, 0, [], res);
    return res;
};