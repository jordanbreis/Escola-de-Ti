import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

export class AuthForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(''),
      password: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      authorizesLevel: new FormControl('')
    })
  }
}

@Component({
  selector: 'users-account-feature-users',
  templateUrl: './account-feature-users.component.html',
  styleUrls: ['./account-feature-users.component.scss'],
})
export class AccountFeatureUsersComponent {

  httpClient = inject(HttpClient)

  form = new AuthForm()

  onSubmit() {
    this.httpClient
      .post('/api/users', this.form.value)
      .subscribe(console.log)
  }

}
