import {Component} from "@angular/core";
import {LocalDataSource} from "ng2-smart-table";
import {AuthHttp} from "angular2-jwt";
import {UserListService} from "./userList.service";
import {RoleEditorComponent} from "./component/role.editor.component";

@Component({
  selector:'user',
  templateUrl:'./userList.component.html',
  styleUrls: ['./userList.scss'],
})

export class UserComponent{


  query: string = '';

  settings = {
    actions:{
      add:false
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave:true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    pager:{
      display:true,
      perPage:10
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string',
        editable:false

      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      roles: {
        title: 'roles',
        type: 'string',
        valuePrepareFunction:(cell,row)=>{
          let res = '';
          for (let obj of cell) {
            if(obj['roleName'] === 'ROLE_ADMIN') {
              res += 'a';
            }else if(obj['roleName'] === 'ROLE_USER'){
              res += 'u';
            }
              // case 'ROLE_ADMIN': res += `<ngu-letter-avatar avatar-data="'A'" ></ngu-letter-avatar>`;
              // case 'ROLE_USER': res += `<ngu-letter-avatar avatar-data="'U'" ></ngu-letter-avatar>`;
             // case 'ROLE_ADMIN': res += `<img width="10%" height="10%" src="assets/icon/role/avator_role_admin.png">`;
             // case 'ROLE_USER': res += `<img width="10%" height="10%" src="assets/icon/role/avator_role_user.png">`;
          }
          return res;
        },
        editor:{
          type:'custom',
          component:RoleEditorComponent
        }
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userListService:UserListService,) {
    this.userListService.getSource()
      .map(res => res.json())
      .subscribe(
        users => {
        this.source.load(users);
      },
        err => console.log(err)
      );
  }


  onEditConfirm(event):void{
    if (window.confirm('Are you sure you want to save?')) {
      console.log(event.data);
      this.userListService.updateUser(event.newData)
        .subscribe(
          v => {
            console.log(v);
            location.reload();
          },
          err => console.log(err));
    } else {
      console.log(event.newData);
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      let id = event.data.id;
      console.log(id);
      this.userListService.deleteUser(id)
        .subscribe(
          v => console.log(v),
          err => console.log(err)
        );
    } else {
      event.confirm.reject();
    }
  }
}

