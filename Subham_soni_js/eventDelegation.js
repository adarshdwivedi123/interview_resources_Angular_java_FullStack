What is Event Delegation? 
Event delegation is a design pattern in which a single event listener is attached to a common ancestor,
 rather than attaching listeners to multiple individual elements.


 Event Delegation is basically a pattern to handle events efficiently. 
 Instead of adding an event listener to each and every similar element, 
 we can add an event listener to a parent element and call an event on a particular target using 
 the .target property of the event object.

 //Event Delegation
 //if we handle the event of parent element then js automatically  handle the event of  
//  Event  here we attach for parent element only

//  <div id="myCar">
//     <li>Item1</li>
//     <li>Item2</li>
//     <li>Item3</li>
//  </div>

//  var parentItem=document.getElementById("myList");
//  parentItem.addEventListener("click",handleItemClick);

//  function handleItemClick(event){
//   var target=event.target;
//   console.log("CLikecked"+target.textContent);
//  }
 