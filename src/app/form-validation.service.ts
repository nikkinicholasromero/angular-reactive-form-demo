import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';

import { ERROR_MESSAGE_MAP } from './error-message.map';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isFormFieldValid(field: AbstractControl): boolean {
    return (field.dirty && field.invalid);
  }

  getErrorMessage(field: AbstractControl, fieldName: string): string | null {
    const errors: ValidationErrors = field.errors;
    for (const error in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, error)) {
        return ERROR_MESSAGE_MAP.get(error)(fieldName);
      }
    }

    return null;
  }
}
