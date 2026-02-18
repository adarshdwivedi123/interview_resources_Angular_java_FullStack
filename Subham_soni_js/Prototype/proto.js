//Prototype are the mechanism by which js object inherit 
//feature from one another

syntax: className.prototype.methodName
Object.__proto__

//Protypeal inheritance
let object={
    name:'ada',
    city:'dehram',
    getIntro:function(){
        console.log(this.name  +"From"+ this.city);
    }
}
let object2={
    name:"Adtiya"
}
object2.__proto__=object;

//This is what prototypal inheritance is object2 inherit the property of object
//
object2.city
dehram


//protypr chaining
Object.__proto__

let object={
    name:'ada',
    city:'dehram',
    getIntro:function(){
        console.log(this.name +""+this.city);
    }
}
let object2={}

