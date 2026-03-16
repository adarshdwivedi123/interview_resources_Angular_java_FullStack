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


let newObj = {};

function flattenObj(obj, parentKey = "") {

  for (let key in obj) {

    let newKey = parentKey ? parentKey + "." + key : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        console.log(newKey);
      flattenObj(obj[key], newKey);
    }
    else {
      newObj[newKey] = obj[key];
      //console.log(newObj[newKey]);
    }

  }
}

let obj = {
  name: "India",
  child: {
    name: "Karnataka",
    child: {
      name: "Bangalore"
    }
  }
};

flattenObj(obj);

console.log(newObj);



how to Check array or object? 
let value = [1,2,3];   // try changing this to {a:1}

if (Array.isArray(value)) {
  console.log("It is an Array");
}
else if (typeof value === "object" && value !== null) {
  console.log("It is an Object");
}
else {
  console.log("Not Array or Object");
}

Use Array.isArray(value) to detect arrays.
Use typeof value === "object" && value !== null to detect objects.