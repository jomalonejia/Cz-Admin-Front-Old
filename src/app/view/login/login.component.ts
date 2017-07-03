import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, AbstractControl} from '@angular/forms';
import {Http,RequestOptions,URLSearchParams} from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class LoginComponent {
  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder,private http:Http) {
    this.form = fb.group({
      "username": [''],
      "password": ['']
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  login(obj) {
    let data = new URLSearchParams();
    data.append('username', obj.username);
    data.append('password', obj.password);
    this.http.post('/api/user/login',data).map(res => res.json()).subscribe(v => console.log(v));
    return false;
  }
}
