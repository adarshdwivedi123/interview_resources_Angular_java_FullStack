//filter
////this.length represent  Array above 

Array.prototype.myfilter=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++)
        {
                if(cb(this[i],i,this));
                //value
                //index
                //complete array
                {
                    temp.push(this[i]);

                }
        }
        return temp;
};



