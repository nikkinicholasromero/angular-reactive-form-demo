import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    console.log(this.profileForm.controls['firstName'].value);
    console.log(this.profileForm.controls['lastName'].value);
  }
}
