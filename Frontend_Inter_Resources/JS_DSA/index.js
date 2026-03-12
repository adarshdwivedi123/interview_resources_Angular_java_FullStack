function countDigit(n){
    count=0;
    while(n>0)
    {
        sum=n/100;
        count++;
        
        
    }
    return count;
  
    
}

n=123;
let p=countDigit(n);
console.log(p);