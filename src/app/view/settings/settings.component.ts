import {Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SettingsModel} from "./settings.model";
import {SettingsService} from "app/view/settings/settings.service";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/filter';
import * as reducers from '../../theme/reducers';
import {isEmpty} from './setting.util';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import * as actions from 'app/theme/actions';
import {Router} from "@angular/router";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {

  public profileForm: FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public username: AbstractControl;
  public password: AbstractControl;
  public email: AbstractControl;

  constructor(private fb: FormBuilder,
              private settingsService: SettingsService,
              private store: Store<reducers.State>,) {
    this.profileForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      'username': ['',],
      'password': ['', Validators.compose([Validators.maxLength(15)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])]
    });
    this.firstName = this.profileForm.controls['firstName'];
    this.lastName = this.profileForm.controls['lastName'];
    this.username = this.profileForm.controls['username'];
    this.password = this.profileForm.controls['password'];
    this.email = this.profileForm.controls['email'];
    this.store.select(reducers.getUsername)
      .filter(username => !isEmpty(username))
      .subscribe(username => {
        this.settingsService.getSettings(username)
          .map(value => value.json())
          .catch((err) => {
            console.log("Caught Error, continuing")
            this.store.dispatch(new actions.LogoutAction());
            return Observable.empty();
          })
          .subscribe(settings => {
            this.firstName.setValue(settings['firstName']);
            this.lastName.setValue(settings['lastName']);
            this.username.setValue(settings['username']);
            this.email.setValue(settings['email']);

          });
      });
  }

  update(body: SettingsModel) {
    this.settingsService.setSettings(body)
      .subscribe(v => console.log(v));
  }
}
