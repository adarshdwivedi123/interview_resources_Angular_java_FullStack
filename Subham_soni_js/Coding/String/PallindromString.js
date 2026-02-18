function isPallindrom(str){
    const reverseStr=str.split("").reverse();
    console.log(reverseStr)
     const reverJoin=reverseStr.join();        
     console.log(reverJoin);
    return str ===  reverJoin;
}
str="madams";
if(isPallindrom(str))
{
    console.log("pallindrom found");
}
else
{
    console.log("Pallindrom not found");
}


////////////////////////do with two pointer///////////////

//To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing
function checkPalindrome(){
   const string = "12321"
   let len = string.length;
   for (i=0; i<len/2;i++) {
     if (string[i]!==string[len-1-i]){
         console.log("Not Palindrome")
     }
     else{
         console.log(" Palindrome")
    }
   }
}
checkPalindrome()




