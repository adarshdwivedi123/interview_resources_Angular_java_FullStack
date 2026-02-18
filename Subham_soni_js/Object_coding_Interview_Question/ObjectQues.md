// 1. Object property summation
// 2. Object property filtering
// 3. Object property sorting
// 4. Object property renaming
// 5. Object Property aggregation
// 6. Object property frequency



const fruits = [
    { apple: 4, orange: 7, grape: 3 },
    { guava: 6, lemon: 4, banana: 8 },
    { orange: 5, pineapple: 7, apple: 7 },
];
let obj={}
fruits.forEach((data)=>{
    // console.log(data);
    for(let newData in data)
    {
    //    Check if that fruit already exists in obj
        if(obj[newData]){
         obj[newData]=data[newData]+obj[newData];
        }
        else{
            obj[newData]=data[newData];
            //yha pe jb usko value ko daal reh  hai to key bhi sath bhi jaye ga
            console.log(obj);
            console.log(obj[newData]);
        }
    }
    
    
    
});
console.log(obj);

//Each Word Reverse



const string1 = "Welcome to javascript guide";

let newString1 = string1.split(" ");
console.log(newString1);

let newString2 = newString1.map((data) => {
    return data.split("").reverse().join("");
});
console.log(newString2);
////////////////////////////

//find the how many pallindrom in a array ?

let arr2 = ["radar", "hello", "level", "world", "madam", "bba", "racecar"];
let sum=arr2.filter((data)=>{
    return data.split("").reverse().join("") == data;
});
console.log(sum);

///////////////////// Group By Object//////////
//Input 
const products =[
    {name :'apples' ,category:'fruits'},
    {name :'apples' ,category:'fruits'},
    {name :'apples' ,category:'vegetables'},
];
//output : fruits and vegeatble ko categorize kro
{
    fruits: [
      { name: 'apples', category: 'fruits' },
      { name: 'apples', category: 'fruits' }
    ],
    vegetables: [ { name: 'apples', category: undefined } ]
  }
  


function groupItems(array){
    let groupedObj={
        fruits:[],
        vegetables:[]
    };
    for(let i=0;i<array.length;i++)
    {
        if(array[i].category === "fruits"){
           groupedObj.fruits.push({name :array[i].name ,category:array[i].category}); 
        }
        if(array[i].category === "vegetables"){
            groupedObj.vegetables.push({name :array[i].name,category:array[i].categoty})
            
        }
    }
    return groupedObj;
}
 console.log(groupItems(products))


 // USing reduce we can do in this way

 
function groupItem2(array) {
    let res = array.reduce((groupedObj2, data) => {
        if (groupedObj2[data.category]) {
            groupedObj2[data.category].push(data);
        } else {
            //[data] is tarah hai becoz hmko dseire output me bhejna hai
            groupedObj2[data.category] = [data];
        }
        return groupedObj2;
    }, {})
    return res;
}




// Question: 10  : grouping object data if keys are repeating/duplicate
// inpit:  {a:1, b:2, a:3, b: 4};
// outout: {a:[1,3], b: [2,4]}

////
///groupby  using col

const  animals=[
    // {name:"Lion" , type:"animal"},
    // {name:"Shark" , type:"fish"},
    // {name:"Eagle" , type:"bird"},
    // {name:"Tiger" , type:"mammal"},
    {name :'adarsh',city:'banglore'},
    {name :'bity',city:'banglore'},
    {name :'priyansh',city:'banglore'},
    {name :'rohan',city:'pune'},
    {name :'adi',city:'pune'}
    
    ];
    const groupedByType=Object.groupBy(animals, animal => animal.city);
    console.log(groupedByType);


    




// way 1: using forEach
// Input 
// arr=[{name: "Alice", age: 20}, {name: "Max", age: 21}, {name: "Jane", age: 20}];

// // output :
// // { age :20},{age:21}
// let data =arr.map((x)=> x .age)
// console.log();

let arr = [{name: "Alice", age: 20}, {name: "Max", age: 21}, {name: "Jane", age: 20}];

// Extract the ages
let ages = arr.map(item => item.age);

// Remove duplicates using a Set
let uniqueAges = [...new Set(ages)];

// Map the unique ages to the desired format
//this is behave like  object literal
//{ age } is shorthand for { age: age }, 
//creating an object where the property name is age and its value is the value of the age variable.

let result = uniqueAges.map(age => ({ age }));
for loop chla key me push krte javao

console.log(result);


//Another solution agar Array me reh ga to aise kro simple for loop chla ke

let mapNew=arr.map((x)=> x.age);
console.log(mapNew);
let set =[...new Set(mapNew)];
console.log(set);
newData =[];
for(let i=0 ;i<set.length;i++)
{
    newData.push({
        'age':set[i]
    });   
}

console.log(newData);



///////////////////



function groupByKey(arr) {
    let result = {};
    arr.forEach(element => {
        if (result[element.city]) {
            result[element.city].push(element);
        } else {
            result[element.city] = [element];
        }
    });

    return result
}

console.log(groupByKey(input))


// Let’s create a small example that combines arrays and objects to showcase how they work together seamlessly in JavaScript. This example involves managing a list of users.

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

// Get names of users over age 28
const userNamesOver28 = users
    .filter(user => user.age > 28)
    .map(user => user.name);
console.log(userNamesOver28); // ['Bob', 'Charlie']
