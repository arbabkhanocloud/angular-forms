import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ValidationErrors,
  AbstractControl,
  AsyncValidator,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidEmail implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (control.value === 'bob1@gmail.com') {
          res({ emailIsForbidden: true });
        } else {
          res(null);
        }
      }, 1500);
    });
    return promise;
  }
}
