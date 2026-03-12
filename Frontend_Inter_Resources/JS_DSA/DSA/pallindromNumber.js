function pallindromNumber(num){
    sum=0;
    orginalNumber=num;
    if(num<0)
    {
        console.log("false");
    }
    while(num !=0)
    {
        rev=num%10;
        sum =sum*10+rev;
        num=Math.floor(num/10);
    }
    // if(orginalNumber === sum)
    // {
    //     console.log("true");
    // }
    // else{
    //     console.log("false");
    // }
    //this simpel way we cna write
        // return orginalNumber == sum;
console.log(sum);
}

num=120;
pallindromNumber(num);