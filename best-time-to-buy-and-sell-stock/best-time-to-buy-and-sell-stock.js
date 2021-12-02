/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0
    
    for(let i = 0; i < prices.length; i++){
        buy = Math.min(buy, prices[i])
        
        profit = Math.max(profit, prices[i]-buy)
    }
    return profit
}


// var maxProfit = function(prices) {
    
//     // let current = 0
//     let profit = 0
    
//     for(let i = 0; i < prices.length-1; i++){
//         for(let j = i+1; j < prices.length; j++){
//            let current = prices[j] - prices[i]
//             if(current > profit){
//               profit = current 
//             }
//         }
//     }
    
//     return profit
    
// };