import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  addressForm = this.formBuilder.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    country: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      console.log(form.get(key).value);
    });
  }
}
