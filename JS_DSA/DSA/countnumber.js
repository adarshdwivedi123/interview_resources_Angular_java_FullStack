
function countDigit(num){
    let count = 0;
    //conveting negatov  number  to postive
    num = Math.abs(num);
     if(num ==0)
        {
            console.log("1");
        }
    while(num > 0){
        //console.log(num);

        num = Math.floor(num / 10);
        count++;
    }

    console.log(count);

}

countDigit(0);


//#)Corner Cases

if(n == 0)
return 1;
