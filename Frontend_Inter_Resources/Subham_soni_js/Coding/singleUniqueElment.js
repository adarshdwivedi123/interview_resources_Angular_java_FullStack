function findUnique(arr){

  let result = 0;

  for(let num of arr){
    result = result ^ num;
  }

  return result;
}

let arr = [1,2,3,2,1];

console.log(findUnique(arr));
//above solution is work for single unique element.