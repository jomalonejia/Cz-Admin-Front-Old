import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class RegisterService{

  constructor(private http:Http){}


  public register(url:string,body:any){
    return this.http.post(url,body);
  }
}

