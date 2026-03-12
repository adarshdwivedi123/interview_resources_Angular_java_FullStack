///V.IM Logic thast will ask lot
//string me hai to usko array me convet kr0

function removeDuplicateCharacters() {
    var string='priya riya supriya'
    let result= string.split('').filter((item, index, arr)=> {
                 return arr.indexOf(item) == index;
                 }).join('');
    return result;
  }
  console.log(removeDuplicateCharacters());


//using filter see ask 
  //Remove Duplicate characters from array of element using filter
  var myArray = ['a', 1, 'a', 1, 'b',2];
  var unique = myArray.filter((value, index, arr) => arr.indexOf(value) === index);