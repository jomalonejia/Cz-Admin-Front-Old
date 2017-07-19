import {Injectable} from "@angular/core";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import {Http} from "@angular/http";

@Injectable()
export class LoginService{

  constructor(private http:Http){}

  public isLogin():boolean {
    return tokenNotExpired();
  }

  public login(url:string,body:any){
    return this.http.post(url,body);
  }
}
