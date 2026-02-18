///All three method  works  fine
let name ={
    firstName:'Akshay',
    lastName:'Saini'
}

let printName=function(){
    console.log(this.firstName +"" +this.lastName);
}

let printMyName = printName.bind(name);
console.log(printMyName);
printMyName();

let car2={
    color:"Red",
    company:"Ferrari",
    }
    
    function purchaseCar(currency,price){
    
    console.log(this.color+ currency);
    console.log(this.company+price);
    
    
    }
    //it will not call method direcly here it will retun method here
    //after that we can call any place
    const newFunc=purchaseCar.bind(car2);
    console.log(newFunc());

//it will returun funciton will paramter of color and company
//akshyan saini call apply bind 


///Polyfill for Bind
let car2={
    color:"Red",
    company:"Ferrari",
    }
    
    function purchaseCar(currency,price){
    
    console.log(this.color+ currency);
    console.log(this.company+price);
    
    
    }
    //this talke argument  as an array
    //we need while passing argumwnt user is provide an array or not
    Function.prototype.myBind =function(context ={} ,...args){
    //cehck for aedgecase mycall is funcion or not
    if(typeof this!== 'function'){
    throw new Error(this+"Cannot be bound as it is  not callable");
    }
    
    context.fn=this;
    //return fucniton when we directly call 
    return function (...newArgs){
        return context.fn(...args,...newArgs);
    }
    
    
    };
    //we cannot providr argument here or in  next line we can provide both ways it same
    const newFunc=purchaseCar.myBind(car2,"$4",5000);
    console.log(newFunc());



    ///
    //Akshay saini bind method
    let name ={
        firstName:'Akshay',
        lastName:'Saini'
    }
    
    let printName=function(hometown,state){
        console.log(this.firstName +"" +this.lastName+hometown + state);
    }
    
    //every funciton should  hvae acces ti js fucniton
    ////here we want printName should be acces so here we sue this //keyword
    //pass an argument in funciton check whther that is work or not
    Function.prototype.mybind=function(...args){
    let obj = this;   //it point to printName  
    params =args.slice(1);
    
    //remove the first element form the list and retutn other element
    //bind first return a funtion
        return function(...args2){
            //here we want printName should be acces so here we sue this //keyword
            obj.apply(args[0],[...params,...args2]);
            
               
        }
        
        
    }
    
    let printMyName = printName.mybind(name,"Dehradun");
    console.log(printMyName);
    printMyName("Uttarpradesh");



    ///////////////////ANother Way  Easy Way
    let name ={
        firstName:'Akshay',
        lastName:'Saini'
    }
    
    let printName=function(hometown,state){
        console.log(this.firstName +"" +this.lastName+hometown + state);
    }
    
    //every funciton should  hvae acces ti js fucniton
    ////here we want printName should be acces so here we sue this //keyword
    //pass an argument in funciton check whther that is work or not
    //context represmtn current obeject here it is name obje
    Function.prototype.mybind=function(context , ...args){
    let func = this;   //it point to printName  
    
    
    //remove the first element form the list and retutn other element
    //bind first return a funtion
        return function(...args2){
            //here we want printName should be acces so here we sue this //keyword
            return func.apply(context,[...args,...args2]);   
        }    
    }
    
    let printMyName = printName.mybind(name,"Dehradun");
    console.log(printMyName);
    printMyName("Uttarpradesh");