// let obj={
//     company:"geeks for geeks",
//     Address:"Noida",
//     ccontact:"7665282012",
//     mentor:{
//         Html:"Gfg",
//         CSS:"GFG",
//         jS:"GFG"
//     },
//     adarsh:['ajju','priyansh']
// };



2ndOupti


let obj={
  "name": "India",
  "child": {
    "name": "Karnataka",
    "child": {
      "name": "Bangalore"
    }
  }
}



const newObj={};
function flattenObj(obj){
    for(key in obj)
    {
        if(typeof obj[key] == "object" && !Array.isArray(obj[key])){
                flattenObj(obj[key]);
        }
        else{
            newObj[key]=obj[key];
            console.log(newObj[key])   sirf vlaue print ye console print krava doe
            
            
        }
    }
}

flattenObj(obj)
console.log(newObj);



<!-- keya  and  value dono print krna hai to -->

let obj={
  "name": "India",
  "child": {
    "name": "Karnataka",
    "child": {
      "name": "Bangalore"
    }
  }
}


const newObj = {};

function flattenObj(obj, parentKey = "") {
    for (let key in obj) {

        let newKey = parentKey ? parentKey + "." + key : key;   // <-- only required addition

        if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
            flattenObj(obj[key], newKey);   // <-- pass newKey
        }
        else {
            newObj[newKey] = obj[key];      // <-- use newKey
            console.log(newObj[newKey]);
        }
    }
}

flattenObj(obj);
console.log(newObj);



{
  name: 'India',
  'child.name': 'Karnataka',
  'child.child.name': 'Bangalore'
}
