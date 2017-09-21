import {AfterViewInit, AfterViewChecked, Component, ElementRef, ViewChild, ChangeDetectorRef} from "@angular/core";
import {DefaultEditor} from "ng2-smart-table";
import {Role} from "app/component/model";
import {ADMIN_ROLE, USER_ROLE} from "app/component/constants";
@Component({
  template: `
    <md-checkbox 
      #admin
      [checked]="isAdminChecked"
      [value]="'ROLE_ADMIN'"
      (change)="changeAdmin($event)">
      Admin
    </md-checkbox>
    <md-checkbox 
      #user
      [checked]="isUserChecked"
      [value]="'ROLE_USER'"
      (change)="changeUser($event)">
      User
    </md-checkbox>
  `,
})
export class RoleEditorComponent extends DefaultEditor implements AfterViewInit {

  @ViewChild('admin') admin: ElementRef;
  @ViewChild('user') user: ElementRef;

  roles:Role[] = [];

  isAdminChecked:boolean;
  isUserChecked:boolean;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
    let value = this.cell.getValue();
    if(value.indexOf('a') != -1){
      this.isAdminChecked = true;
    }
    if(value.indexOf('u') != -1){
      this.isUserChecked = true;
    }
    this.cdr.detectChanges();
  }


  changeAdmin(event){

    this.roles.push(ADMIN_ROLE);
    this.cell.setValue(this.roles);
  }

  changeUser(event){
    this.roles.push(USER_ROLE);
    this.cell.setValue(this.roles);
  }
}
