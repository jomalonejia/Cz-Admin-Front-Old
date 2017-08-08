import {Thread} from "./thread";
export class Message {
  public messageId:string;
  public threadId: string;
  public username: string;
  public text: string;
  public sentTime: Date;
  public isRead: boolean;
  public isFailed: boolean;


  constructor(obj?) {
    this.messageId = obj && obj.messageId || '';
    this.threadId = obj && obj.threadId || '';
    this.username = obj && obj.username || '';
    this.text = obj && obj.text || '';
    this.sentTime = obj && obj.sentTime || '';
    this.isRead = obj && obj.isRead || false;
    this.isFailed = obj && obj.isFailed || false;
  }
}
