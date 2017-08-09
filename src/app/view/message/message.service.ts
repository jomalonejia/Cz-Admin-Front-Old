import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs} from "@angular/http";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class MessageService{

  constructor(private http:Http,private authHttp:AuthHttp){

  }

  public setMessageThreadId(selfUsername:string,oppositeUsername:string,threadId:string):void{
    localStorage.setItem(selfUsername + "_" + oppositeUsername + "_threadId",threadId);
  }

  public getMessageThreadId(selfUsername:string,oppositeUsername:string):string{
    return localStorage.getItem(selfUsername + "_" + oppositeUsername + "_threadId");
  }

  public removeMessageThreadId(selfUsername:string,oppositeUsername:string):void{
    localStorage.removeItem(selfUsername + "_" + oppositeUsername + "_threadId");
  }

  public listMessgesById(threadId:string){
    return this.http.get('/koa/listMessagesById/'+threadId);
  }

  public listMessages(user1:string,user2:string){
    let params = [user1,user2];
    return this.http.get('/koa/listMessages',{params:params})
  }

  public listRelatedUsers(userId:Number){
    let params = {'userId':userId};
    return this.authHttp.get('/api/user/listRelatedUsers',{params:params});
  }
}
