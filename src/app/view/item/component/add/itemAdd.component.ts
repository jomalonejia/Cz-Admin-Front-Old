import {Component} from "@angular/core";
import {FileItem, FileUploader, ParsedResponseHeaders} from "ng2-file-upload";

import * as reducers from '../../../../component/reducers';
import * as actions from '../../../../component/actions';
import * as constants from '../../../../component/constants';

@Component({
  selector: 'itemAdd',
  templateUrl: './itemAdd.component.html',
  styleUrls: ['./itemAdd.scss'],
})

export class ItemAddComponent {

  imageuploader: FileUploader;
  minusImageuploader: FileUploader;
  showImageuploader: FileUploader;

  defaultPicture: string = '';

  constructor() {

    const token = JSON.parse(localStorage.getItem('login'))['token'];

    this.imageuploader = new FileUploader({
      url: "api/user/profileUpload",
      method: "POST",
      itemAlias: "uploadedfile",
      authTokenHeader: constants.TOKEN_HEADER,
      authToken: token,
    });
  }


  ngOnInit() {
    this.imageuploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      if (status == 200) {
        console.log('success');
      } else {
        console.log('error');
      }
    }
  }

  changeImage() {
    console.log('a');
  }
}

