import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from "@angular/core";
import {FileItem, FileUploader, ParsedResponseHeaders} from "ng2-file-upload";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Action, Store} from "@ngrx/store";
import * as reducers from '../../component/reducers';
import * as actions from '../../component/actions';
import * as constants from '../../component/constants';


@Component({
  selector:'profile',
  templateUrl:'./profile.component.html',
  styleUrls:['./profile.component.scss']
})

export class ProfileComponent{
  public defaultPicture = 'default';
  public profile$:Observable<string>;
  public uploadInProgress:boolean;

  @Input() canDelete:boolean = true;

  uploader:FileUploader



  selectedFileOnChanged() {
    //console.log('change');
  }

  constructor(private router:Router,
              private store:Store<reducers.State>,
              private renderer:Renderer2) {

    this.profile$ = this.store.select(reducers.getImgUrl);

    const token = JSON.parse(localStorage.getItem('login'))['token'];
    this.uploader = new FileUploader({
      url: "api/user/profileUpload",
      method: "POST",
      itemAlias: "uploadedfile",
      authTokenHeader:constants.TOKEN_HEADER,
      authToken:token,
      autoUpload:true
    });
  }

  ngOnInit(){
    this.uploader.onSuccessItem = (item:FileItem, response:string, status:number, headers:ParsedResponseHeaders) => {
      if (status == 200) {
        this.store.dispatch(new actions.UploadProfileSuccessAction(response));
      }else {
        console.log('error')
      }
    }

  }

  bringFileSelector():boolean {
    this.renderer.selectRootElement('#fileUpload').click();
    return false;
  }


}
