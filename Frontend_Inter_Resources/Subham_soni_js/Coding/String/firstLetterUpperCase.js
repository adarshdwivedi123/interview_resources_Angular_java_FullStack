//Uppercase of each first letter of a words 
function upperCaseFirsstLetter(){
   var string ="India is my country";
   var words = string.toLowerCase().split(" ")
   for( var i=0; i<words.length; i++) {
      words[i]=words[i][0].toUpperCase() + words[i].slice(1) //slice is used here to give all the letters except first letter.
      }
   return words.join(" ")
}
console.log(upperCaseFirsstLetter())



////////////////////////////////////////////////////

//The join() method returns an array as a string.
//Uppercasr first letter using map funcition
function upperCaseFirsstLetter(){
    var string ="India is my country";
    var words = string.toLowerCase().split(" ").map((ele)=>{
                return ele[0].toUpperCase() + ele.slice(1)
    })
    return words.join(" ")
 }
 console.log(upperCaseFirsstLetter())


