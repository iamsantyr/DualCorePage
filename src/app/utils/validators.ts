import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateForm(formData: { name: string; email: string; message: string }): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors['name'] = 'Name must be at least 2 characters';
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors['email'] = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors['message'] = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const isValid = validateEmail(control.value);
    return isValid ? null : { invalidEmail: true };
  };
}

export function minLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const isValid = control.value.trim().length >= minLength;
    return isValid ? null : { minLength: { required: minLength, actual: control.value.trim().length } };
  };
}
