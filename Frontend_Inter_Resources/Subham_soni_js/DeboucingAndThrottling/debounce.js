// //Debounce funciton wait a certain amount of time before it run again
// const ele=document.querySelector('input');
// ele.addEventListener('keyup',function(){
//     console.log("data storage recevied from server");
// })

//Debouncing is a useful technique for improving the performance of web applications.
//it use prevent unnessary  network call
// It can be used to prevent functions from being called too often in response to events, 
//such as user input or scroll events.

//This is useful in situations where a function is called repeatedly in response to an event,
// such as a user typing in a search bar.

//  debouncing, the function would be called every time the user types a character,
// which could lead to performance problems




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <!-- <script src="style.css"></script> -->
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <input type="text" onkeyup="betterFunction()"/>
//     <h1 id="heading">Hello</h1>
//     <div class="cent">
//       <p>Adarsh ia a center</p>
//     </div>
//   <script src="index.js"></script>    
  
// </body>
// </html>

//Throttling
let  counter =0;
const getData=() =>{
        console.log("Fetching Data ...",counter++);

}
let debounce =function(fn,d){
    let timer;
    return function(){
        let context =this,
        args =arguments;  //it give us array  sot  that we use apply 
        console.log(context);
        console.log(args);
        clearTimeout(timer);  //intialluy undefined
        timer= setTimeout(()=>{
            getData.apply(context,arguments);  
            
        },d);

    }
}

//try dry  run while giving 5 sec
//1000
//A   //settimpout id return   ABC
//300 //AbC setiomout hutt gya xyz
// 800   xyz hutta diya  ada
//1200 ada  le ke 


let betterFunction =debounce(getData,3000)

///https://saurabhnativeblog.medium.com/polyfill-for-debounce-in-javascript-interview-question-d24a6c62faad
//https://medium.com/@diwakarsingh6853/debounce-polyfill-js-03eda5f96c0c

//debounce

//dry run   

for(var i=0;)
    //0000


let 
11


//

      for (let i = 1; i <= 5; i++) {
        // function close(i) {
        //   setTimeout(function () {
        //     console.log(i);
        //   }, i * 1000);
        // }
        // close(i);
        setTimeout(function () {
                console.log(i);
              }, i * 1000);

      }
   var i= global scope   5
    
      {
         var i=1  
        // function close(i) {
        //   setTimeout(function () {
        //     console.log(i);
        //   }, i * 1000);
        // }
        // close(i);
        setTimeout(function () {
                console.log(i);
              }, i * 1000);

      }


      {
        var i=2;
        // function close(i) {
        //   setTimeout(function () {
        //     console.log(i);
        //   }, i * 1000);
        // }
        // close(i);
        setTimeout(function () {
                console.log(i);
              }, i * 1000);

      }


      {
        var i=3
        // function close(i) {
        //   setTimeout(function () {
        //     console.log(i);
        //   }, i * 1000);
        // }
        // close(i);
        setTimeout(function () {
                console.log(i);
              }, i * 1000);

      }


      {
        // function close(i) {
        //   setTimeout(function () {
        //     console.log(i);
        //   }, i * 1000);
        // }
        // close(i);
        setTimeout(function () {
                console.log(i);
              }, i * 1000);

      }

      {
        // function close(i) {
        //   setTimeout(function () {
        //     console.log(i);
        //   }, i * 1000);
        // }
        // close(i);
        setTimeout(function () {
                console.log(i);
              }, i * 1000);

      }
      console.log('Hello World');