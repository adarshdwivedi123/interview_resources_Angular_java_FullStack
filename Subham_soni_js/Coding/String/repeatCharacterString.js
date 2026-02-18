function sumAlgo(arr)
{
    //agar sort kr denge voe uske bagal a jaye ga
    const sortedArray=str.split("").sort().join("");
    console.log(sortedArray)
    for(i=0;i<sortedArray.length-1;i++)
    {
        if(sortedArray[i] === sortedArray[i+1])
        {
            console.log(sortedArray[i]);
        }
    }    
}

const str = "Hello World!";
sumAlgo(str);

// In above two  ll is come 
//then use set convert into set then repeated are gone



    //agar sort kr denge voe uske bagal a jaye ga
    function findDuplicateCharacters(str) {
        var result = [];
        var count = 0;
    
        for (var i = 0; i < str.length; i++) {
            for (var j = i + 1; j < str.length; j++) {
                if (str[i] === str[j]) {
                    result.push(str[i]);
                }
            }
        }
    let set = new Set(result)
        // return  result;
        return set;
    }
    
    
    const str = "Hello World!";
    p=findDuplicateCharacters(str);
    console.log(p);



    ///fiter se try kro