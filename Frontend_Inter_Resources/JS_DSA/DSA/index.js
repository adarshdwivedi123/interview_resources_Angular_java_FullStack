//Math.floor importan
function countDigit(n){
    count=0;
    sum=0;
    while(n != 0)
    {
         sum=n%10;
         n= Math.floor(n/10);
        count++;
        console.log(sum);
        
    }
    console.log(count);
    
}
n=123;
countDigit(n);

Soluiton 2

We can do this without using function
Use bitwise operator | 0 (Fast Trick)
num = (num / 10) | 0;

--------------------------------------------------------
#)solution 3
function countDigit(num){
    let count = 0;

    while(num > 0){
        num = parseInt(num / 10);  // removes decimal part
        count++;
    }

    console.log(count);
}

countDigit(10000);