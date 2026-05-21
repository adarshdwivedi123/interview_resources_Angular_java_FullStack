import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.myForm = this.fb.group({
      skills: this.fb.array([])
    });

  }

  get skills(): FormArray {

    return this.myForm.get('skills') as FormArray;

  }

  addSkill() {

    this.skills.push(
      this.fb.control('')
    );

  }
}