import { Component, OnInit } from '@angular/core';
import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidEmail } from './asyncEmailValidator';

export class FormValidator {
  /** A username can't match the given regular expression */
  static forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  static forbiddenEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === 'bob@gmail.com') {
        return { forbiddenEmail: { value: control.value } };
      } else {
        return null;
      }
    };
  }
}
