1)When an event like scrolling or resizing happens continuously, the function can be triggered many times in a short period, which may cause performance issues. To solve this, we use throttling, which ensures the function runs at most once in a specified time interval, no matter how many times the event occurs.

2)Throttling is used to call a function after every millisecond or a particular interval of time only 
the first click is executed immediately.

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


