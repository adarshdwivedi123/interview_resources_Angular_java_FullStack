import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <form>
    <input  type="text" [(ngModel)]="userInput"/>
</form>

<table>
<th></th>
<tr *ngfor="let data of searchTable";></tr>
<td>{{data}}</td>
</table

  `,
})
export class App {
  name = 'Angular';
  searchTable:any;
  userInput!:string;

  arr=[{
   name:'adrsh',age:24
  }
  ,{
    name:'test',age:25
  }
]

  //watever user input based on that search
 search(userInput:string){
    this.searchTable= this.arr.filter((search:any)=>{
      return search ===userInput;
    })


    

  }

//seach kro  and tbake me dlao ke dikhavi
//need one input box user put in box  where user type and value put in table
//


///modules
//perfomance optimzation
//lazyloading
//if and for whic module we are using
//something about project 
//observable 
//observabel and  promsie kuch real use case
//template driven form me kaise call  krna tha dekh lo
}life cycle hook 
services

bootstrapApplication(App);
