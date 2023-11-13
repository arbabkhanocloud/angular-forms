import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ValidEmail } from '../asyncEmailValidator';
import { FormValidator } from '../validator.utils';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];
  constructor(private validEmail: ValidEmail) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          FormValidator.forbiddenNameValidator(/bob/i),
        ]),
        email: new FormControl(
          null,
          [Validators.required, FormValidator.forbiddenEmail()],
          [this.validEmail.validate.bind(this.validEmail)] //asyncValidators
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe((val) => {
    //   console.log(val);
    // });

    // this.signupForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'abcd',
    //     email: 'Khan@gmail.com',
    //   },
    //   gender: 'female',
    //   hobbies: [],
    // });

    // this.signupForm.patchValue({
    //   userData: {
    //     username: 'Hello',
    //   },
    //   gender: 'male',
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddhobby() {
    const hobbyControl = new FormControl('', Validators.required);
    (<FormArray>this.signupForm?.get('hobbies')).push(hobbyControl);
  }

  get hobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  get userName() {
    return this.signupForm.get('userData.username');
  }
}
