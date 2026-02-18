//brute force approach
Use a for loop of ‘i’ from 0 to n.
Use another for loop of j from ‘i+1’ to n.
If arr[j] > arr[i] , take the difference and compare  and store it in the maxPro variable.
Return maxPro.





function maxProfit(arr) {
    maxPro = 0;
    n = arr.length;

   for ( i = 0; i < n; i++) {
       for ( j = i + 1; j < n; j++) {
           if (arr[j] > arr[i]) {
               p=arr[j] - arr[i]
           maxPro = Math.max(p, maxPro);
           }
       }
       }

   return maxPro;
}


    arr = [7,1,5,3,6,4];
    maxPro = maxProfit(arr);
   console.log("Max profit is: "+maxPro)







optimal Approach
//Approach:

Create a variable maxPro and store 0 initially.
Create a variable minPrice and store some larger value(ex: MAX_VALUE) value initially.
Run a for loop from 0 to n.
Update the minPrice if it is greater than the current element of the array
Take the difference of the minPrice with the current element of the array and compare and maintain it in maxPro.
Return the maxPro.

//2 soln striver



/////////////
another solutiomn
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;    
};