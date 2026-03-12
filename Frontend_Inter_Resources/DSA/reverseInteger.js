// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    rev=0;
    limit =Math.pow(2,31)
    xcopy=Math.abs(x)
    
    while(xcopy !=0)
    {
        rem=xcopy%10;
        rev=rev*10+rem;
        xcopy=Math.floor(xcopy/10);
    }
    if(rev < -limit || rev >limit-1)
    {
        return 0;
    }
    //orginal value hai  usme negative lga voe.
    return  x>0?rev:-rev;

    
};