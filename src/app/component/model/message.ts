import {Thread} from "./thread";
export class Message{
    private id:number;
    private sentTime:Date;
    private isRead:boolean;
    private username:string;
    private text:string;
    private isSelf:boolean;

  constructor(id,sentTime,isRead,username,text,isSelf){
    this.id = id;
    this.sentTime = sentTime;
    this.isRead = isRead;
    this.username = username;
    this.text = text;
    this.isSelf = isSelf;
  }
}
