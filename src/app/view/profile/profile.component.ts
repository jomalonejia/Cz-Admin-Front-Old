
import {Component} from "@angular/core";
@Component({
  selector:'profile',
  templateUrl:'./profile.component.html',
  styleUrls:['./profile.component.scss']
})

export class ProfileComponent{
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };


  constructor() {
  }

  ngOnInit() {
  }
}
