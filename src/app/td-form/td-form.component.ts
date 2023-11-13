import { Component } from '@angular/core';
import { ViewChild, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss'],
})
export class TdFormComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  defaultQuestion = 'pet';
  questionAnswer: string = '';
  onSubmit() {
    console.log('OnSubmit', this.signupForm);
  }

  ngOnInit(): void {
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'arbab',
    //     email: 'bob@gmail.com',
    //   },
    //   sercret: 'teacher',
    // });
    // this.signupForm.control['username'].setValue = 'khaasdfadsf';
  }

  get isDisable(): boolean {
    if (this.signupForm.form.status === 'INVALID') {
      return true;
    }
    return false;
  }
}
