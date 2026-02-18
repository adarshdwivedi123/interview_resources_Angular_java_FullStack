ngrx how to  ahndle state mangement
patch value and setValue
//bookit interview expeeirnce
//decorator in angular
//lifecycel hook
//which is safe method is passing the from one componet to other component
//typescript suppoet method overloading and overridng   typescipr suuport  inhertitance 
//passing the data from one compoentnt to other  
//How two compoent is ccommincate with each other if they are nom parent childe rlationship? ask in many company
// div have three color after 2 second  it give three color
//using pipe how to  find the odd number from array .array conssite of 20 number 
//arr=[{name: "Alice", age: 20}, {name: "Max", age: 21}, {name: "Jane", age: 20}];
//outpur obje return {age:20},{age:21}
//call apply and bind diffrenece  dekho( )
//authenctiocation vs authorization

//arr=[{name: "Alice", age: 20}, {name: "Max", age: 21}, {name: "Jane", age: 20}];


/////////


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


