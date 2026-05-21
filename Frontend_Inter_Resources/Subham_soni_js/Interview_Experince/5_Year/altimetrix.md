why we  ormitive and not primtive top define
object.freexe and  and spread
what is standlaone true

===================================================================

saerch box  with quey paramertere  if we do search watever data  after search that will dsipaly 
in ui


1I incase of 

import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NotExpr } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from './search-component/search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <form>
  <div><input type="text" formControlName="search" />Search<br /></div>

  {{ newData }}
</form>

  `,
})
export class App {
  searchForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  newData: any;

  ngOnInit() {
    this.intialData();
    this.searchfunctionality();
  }

  intialData() {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  searchfunctionality() {
    // let searchData = this.searchForm.search('search');
    //   this.searchService.search(searchData).subscribe((res) => {
    //           this.newData = res;
    //   });
    // }
  }
}

bootstrapApplication(App);

//Note
//Api
//search box  funcitnalit we need to implem
//display in div and table
