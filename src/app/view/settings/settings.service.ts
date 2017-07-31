import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import * as constants from '../../component/constants';
import {SettingsModel} from "app/view/settings/settings.model";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class SettingsService {

  constructor(private http: AuthHttp) {
  }

  public getSettings(username: string) {
    let params = {'username':username};

    return this.http.get(constants.GETSETTINGS_URL,{params:params});
  }

  public setSettings(body:SettingsModel){
    let headers = JSON.parse(localStorage.getItem('login'))['token'];
    return this.http.post(constants.SETSETTINGS_URL,body);
  }
}
