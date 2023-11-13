import { Directive, Input, DoCheck } from '@angular/core';
import { FormValidator } from './validator.utils';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: 'appForbiddenName',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class ForbiddenValidatorDirective implements Validator, DoCheck {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('asdfasdfasdfS', this.forbiddenName);
    return this.forbiddenName
      ? FormValidator.forbiddenNameValidator(
          new RegExp(this.forbiddenName, 'i')
        )(control)
      : null;
  }

  ngDoCheck(): void {
    console.log('asdfasdfasdfS', this.forbiddenName);
  }
}
