/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let a = 1, b = 2, next;
    
//     for(let i = 3; i <= n; i++) {
//         next = a + b;
//         a = b;
//         b = next;
//     }
//     return n === 1 ? a : b;
// };





//Solution 1 recursive without memoization

function climbStairs(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
}





//Solution 2: Recursive with Memoization

//O(n) time and space


const cache = { 0: 0, 1: 1, 2: 2 }
function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2
    if (!cache[n]) {
        cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
    return cache[n];
}







//Dynamic programming O(n) time and O(n) space

//O(n) time and space
//faster than memoization because we pre-allocate the array upfront


function climbStairs(n){
    const dp = new Array(n).fill(0);
    // Base Cases
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    // Start from n=3 since we have covered the solutions up to N=2 above
    // Sum the last 2 results behind me to get the current result.
    // dp[i] = dp[i-1] + dp[i-2]
    
    for(let i=3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[n];
}
