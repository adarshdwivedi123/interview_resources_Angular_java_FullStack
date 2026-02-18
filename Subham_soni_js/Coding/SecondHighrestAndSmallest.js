
//first check where no depenecys tasr first
 
 
//  function schduleTask(tasks){
//      for(let i=0;i<tasks.length;i++)
//      {
//           if(task.id === task.dependencies)
//           {
               
//           }
//      }
     
     
//  }
//  const tasks = [
//   { id: 'a', description: 'Task A', dependencies: ['b', 'c'] },
//   { id: 'b', description: 'Task B', dependencies: ['c'] },
//   { id: 'c', description: 'Task C', dependencies: [] },
//   { id: 'd', description: 'Task D', dependencies: ['a', 'c'] }
// ];
//  schduleTask(tasks);
 
 
 //output
// The function scheduleTasks(tasks) should return:
// ['c', 'b', 'a', 'd']

 //wap secondest higest number in  from array
 
 
//  0/p=> 20


function secondGrestest(arr){
    firstMax=arr[0];
    secondMax=arr[0];
    thirdMax=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>firstMax)
        {
            firstMax=arr[i];
        }
    }
    for(let j=1;j<arr.length;j++)
    {
        //first  max jo hai voe iske eqgual nhi hona chaiye
        //jo phele max hai voe hmra isse array ke equla nhi hona chayiye yhi
        //faso ge dekh lena
      if(arr[j]>secondMax  && arr[j] !== firstMax)
      {
          console.log(arr[j]);
          secondMax=arr[j]
      }
    }
    console.log(secondMax);
    
}
arr=[10,20,5,40,30];
secondGrestest(arr);


///(Brute Force) [this approach only works if there are no duplicates]
function getElement(arr) {
    if (arr.length === 0 || arr.length === 1) {
      console.log(-1 + " " + -1); // Edge case when only one element is present in the array
      
    }
  
    arr.sort((a, b) => a - b);
    let small = arr[1];
    let large = arr[arr.length - 2];
    console.log("Second smallest " + small);
    console.log("Second largest " + large);
  }
  
  const arr = [1, 2, 4, 6, 7, 5];
  getElement(arr);
  Time Complexity: O(NlogN), For sorting the array
  Space Complexity: O(1)




  //Second Smallest and Second Largest

  function secondHighest(arr)
  {
      //if sb arr[0] le reh hai to dikat a rhi hai kyu?
      //above varibale me choti value daal de rha hu
      large=-Infinity;
      second_large=-Infinity;
      small=Infinity;
      second_small=Infinity;
      for(let i=0;i<arr.length;i++)
      {
          if(arr[i] >large)
          {
              large=arr[i];    
          }
          if(arr[i]<small)
          {
              small=arr[i];
          }
          
  
      }
      for(let i=0;i<arr.length;i++)
      {
        //current eleelmnt alrready to equal to nhi hai large ke liye
          if(arr[i] >second_large && arr[i] !== large)
          {
              second_large=arr[i];
          }
          if(arr[i] < second_small && arr[i] !== small)
          {
              second_small=arr[i];
          }
      }
      console.log(second_large);
      console.log(second_small);
  }
  
  
  
  
  arr=[1,2,3,4,5,10]
  secondHighest(arr)


  /////////////////////

function secondSmallest(arr){
   small=Infinity
   secondSmall=Infinity 
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] < small)
                {
                    small=arr[i];
                    secondSmall=small;
                }
                else if(arr[i] <secondSmall &&  arr[i] !== small)
                    {
                            secondSmall=arr[i];
                    }
        }
        return secondSmall;
}




 const arr = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr);
const sL = secondLargest(arr);