
//check  krte chl0 uske consecutive element equal hai kya 
//agar equal hai to counter ++
// counter =0
//#1

function maxOnes(prices){
    count=0;
    max=0;
    for(let i=0;i<prices.length;i++)
    {
          if(prices[i] == prices[i+1])
          {
          
              count++;
          }
          else{
            //coiunter reset kr de reh hai dekho isse dhayn se
            //doe consecutivne mila hai usek baad new mila to pohele counter zero kro fir kro
              count=0;
          }
          
          if(count>max)
           max=count;
    }
    console.log(max);
    
}
prices = [1, 1, 0, 1, 1, 1];
maxOnes(prices)


/// find the consecutinve ones
//#2
function maxOnes(prices){
    count=0;
    max=0;
    for(let i=0;i<prices.length;i++)
    {
          if(prices[i] == 1)
          {
              count++;        
          }
          else{
            //jha break huva vha pe zero daal do
              count =0;
          }
          
          if(count>max)
           max=count;
    }
    console.log(max);
    
}
prices = [1, 1, 0, 1, 1, 1];
maxOnes(prices)

Time Complexity: O(N) since the solution involves only a single pass.

Space Complexity: O(1) because no extra space is used.