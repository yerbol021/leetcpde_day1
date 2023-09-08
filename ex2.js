function maxProfit(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const potentialProfit = prices[i] - prices[i - 1];

    if (potentialProfit > 0) {
      profit += potentialProfit;
    }
  }

  return profit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 7

const prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices2)); // Output: 4

const prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3)); // Output: 0
