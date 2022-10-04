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

function subsets(nums) {
	const result = [];
	dfs([], 0);

	function dfs(slate, index) {
		result.push(slate);
		for (let i = index; i < nums.length; i++) {
			dfs([...slate, nums[i]], i + 1);
		}
	}

	return result;
}