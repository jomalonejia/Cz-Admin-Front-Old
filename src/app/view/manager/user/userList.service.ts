import {Injectable} from "@angular/core";
import {AuthHttp} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import * as constants from 'app/component/constants';

@Injectable()
export class UserListService{
  constructor(private http:AuthHttp){

  }

  public getSource():Observable<any>{
    return this.http.get(constants.GETUSERLIST_URL);
  }

  public updateUser(obj):Observable<any>{
    return this.http.post(constants.UPDATEUSER_URL,obj);
  }

  public deleteUser(id:number):Observable<any>{
    return this.http.delete(constants.DELETEUSER_URL,{params:{['id']:id}});
  }
}
