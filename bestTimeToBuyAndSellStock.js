var maxProfit = function(prices) {
    var diff, profit = 0, buy = prices[0];
    for (var i = 1; i < prices.length; i++) {
        diff = prices[i] - buy;
        if (diff > profit) profit = diff;
        if (prices[i] < buy) buy = prices[i];
    }
    return profit;
};
