import {Component} from '@angular/core';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket'
import {Subscription} from "rxjs/Subscription";
import {Message} from "app/component/model/message";
import {Store} from "@ngrx/store";
import {UUID} from 'angular2-uuid';

import * as _ from 'lodash';
import * as reducers from '../../component/reducers';
import {Observable} from "rxjs/Observable";
import {MessageService} from "app/component/service";
import {MessageUser} from "./model/message.user";

@Component({
  selector: 'message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent {

  ws: $WebSocket;
  sub: Subscription;
  messages: Message[] = [];
  messages$:Observable<Message[]>;
  message: Message;
  friends: MessageUser[] = [];
  username: string;
  profile:string;
  activateUser:string;
  userId:number;

  constructor(private store: Store<reducers.State>,
              private messageService: MessageService) {
    this.store.select(reducers.getUsername)
      .subscribe(username => this.username = username).unsubscribe();
    this.store.select(reducers.getImgUrl)
      .subscribe(profile => this.profile = profile);
    this.store.select(reducers.getActiveUser)
      .subscribe(activateUser => this.activateUser = activateUser);
    this.store.select(reducers.getUserId)
      .subscribe(userId => this.userId = userId).unsubscribe();
    this.messages$ = this.store.select(reducers.getMessages);
  }

  ngOnInit(){
    this.messageService.listRelatedUsers(this.userId)
      .map(res => res.json())
      .subscribe(v => {
        v.map(user => {
          let friend = new MessageUser();
          Object.assign(friend, user);
          this.friends.push(friend);
        })
      });
    this.toggleUsername(this.activateUser);
  }

  ngAfterViewInit() {
    this.initWebSocket();
  }

  ngOnDestroy() {
    this.destroyWebSocket();
  }

  initWebSocket(): void {
    this.ws = new $WebSocket('ws://localhost:3000/test');
    this.sub = this.ws.getDataStream()
      .map(res => JSON.parse(res.data))
      .subscribe(
        message => {
          let sentMessage = new Message();
          Object.assign(sentMessage, message);
          this.messages.push(sentMessage);
        },
        err => {
          console.error(err);
        }
      );
  }

  destroyWebSocket(): void {
    if (this.sub) {
      try {
        this.sub.unsubscribe();
      } catch (err) {
      }
    }
    if (this.ws) {
      try {
        this.ws.close(true);
      } catch (err) {
      }
    }
  }

  createMessage(message: string): Message {
    return new Message({
      messageId: UUID.UUID(),
      threadId: this.messageService.getMessageThreadId(this.username, this.activateUser),
      username: this.username,
      text: message,
      profile:this.profile,
      sentTime: new Date,
      sentTo: this.activateUser,
      isFailed: false
    });
  }

  send(messageStr) {
    let newMessage = this.createMessage(messageStr);
    this.ws.send(newMessage).subscribe({
      error: () => {
        let errorMessage = Object.assign(newMessage, {'isFailed': true});
        this.messages.push(errorMessage);
      },
      complete: () => {
      }
    });
  }

  toggleUsername(username) {
    if(username === this.username){return}
    this.messages = [];
    this.messageService.removeMessageThreadId(this.username,username);
    let threadId = this.messageService.getMessageThreadId(this.username, username);
    if (threadId != null) {
      this.messageService.listMessgesById(threadId)
        .map(res => res.json())
        .subscribe(res => {
          if(res.messages.length>0){
            res.messages.map(msg => {
             let message = new Message();
             Object.assign(message, msg);
             this.messages.push(message);
             });
          }
        });
    } else {
      this.messageService.listMessages(this.username, username)
        .map(res => res.json())
        .subscribe(res => {
          if (res[0]) {
           this.messageService.setMessageThreadId(this.username,username,res[0]._id);
            if (res[0].messages.length > 0) {
              res[0].messages.map(message => this.messages.push(message));
            }
          } else {
            this.messageService.setMessageThreadId(this.username,username,res._id);
            if (res && res.messages.length > 0) {
              this.messages.push(res.messages);
            }
          }
        });
    }
  }
}
