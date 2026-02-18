
///Polyfill for apply
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
    Function.prototype.myApply =function(context ={} ,args=[]){
    //cehck for aedgecase mycall is funcion or not
    if(typeof this!== 'function'){
    throw new Error(this+"IT is not callable");
    }
    //we need to check in case user have not provided in form of array then  we need  check that one
    if(!Array.isArray(args))
    {
    throw new TypeError("CreateListFromArrayLike Called on");
    }
    
    context.fn=this;
    context.fn(...args);
    
    };
    purchaseCar.myApply(car2,["t" ,50000]);
    