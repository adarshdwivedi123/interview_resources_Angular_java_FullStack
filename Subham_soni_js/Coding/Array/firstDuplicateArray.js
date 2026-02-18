[1,2,2,5,5];
//output is 2

function firstDuplicate(){
    
    var string ="India is my Country";
    var words=string.toLocaleUpperCase().split(" ").map((ele)=>{
       return ele[0].toUpperCase() +ele.slice(1);    
    })
    return words.join(" ");
     
}
console.log(firstDuplicate());