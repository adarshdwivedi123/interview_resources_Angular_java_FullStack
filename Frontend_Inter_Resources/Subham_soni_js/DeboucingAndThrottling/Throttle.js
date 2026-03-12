//Throttling is used to call a function after every millisecond or a particular interval of time only 
//the first click is executed immediately.

//throttling used for perfomance optimization and rate limiting
const  throttle =(func,limit)=>{
    let flag=true;
    return function(){
        let context= this;
        args=arguments;
      
        if(flag){
            func.apply(context,args)
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit);
        }
    
    }
}
//need dry run 


