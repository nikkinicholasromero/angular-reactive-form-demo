import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { FormValidationService } from './form-validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl('');
  profileForm = new FormGroup({
    emailAddress: new FormControl('', [ Validators.required, Validators.email ]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
  addressForm = this.formBuilder.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    country: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    public validation: FormValidationService) {}

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      console.log(form.get(key).value);
    });
  }
}
