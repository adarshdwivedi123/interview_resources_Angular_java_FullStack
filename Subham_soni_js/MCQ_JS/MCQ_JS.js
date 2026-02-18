var b= function xyz(){
    console.log("B called");
}
b();
xyz();  //refernce error xyz is not defiend

//after this  we can call both
var b=xyz();

xyz()//   b Called it
b();   //   b called


