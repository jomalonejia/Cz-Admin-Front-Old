import {Component} from '@angular/core';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket'
import {Subscription} from "rxjs/Subscription";
import {Message} from "app/component/model/message";

@Component({
  selector: 'message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent {

  ws: $WebSocket;
  sub: Subscription;
  messages:Message[] = []
  message:Message;

  constructor(){
    let message1 = new Message(1,new Date,true,'xiaoming','ni hao a',false);
    let message2 = new Message(2,new Date,false,'xiaowang','ni ye hao a',true);
    this.messages.push(message1);
    this.messages.push(message2);
  }

  ngAfterViewInit() { this.initWebSocket(); }
  ngOnDestroy() { this.destroyWebSocket(); }
  initWebSocket(): void {
    this.ws = new $WebSocket('ws://localhost:3000/test');
    this.sub = this.ws.getDataStream().subscribe(
      data => {
        console.log(data);
        //this part is following the example on the github page
        //makes me unsure because the close method will force a close and true/false only signifies if the closing is immediate or not
        //even if i comment out this line, i still get the same behavior
      },
      err => console.error(err)
    );
  }
  destroyWebSocket(): void {
    //this is the only place where i destroy/release my websocket resources
    if (this.sub) {
      try {
        this.sub.unsubscribe();
      } catch(err) { }
    }
    if (this.ws) {
      try {
        this.ws.close(true);
      } catch(err) { }
    }
  }

  click(){
    this.ws.send("some thing").subscribe({
      complete: () => {
        console.log('done');
        let newMessage = new Message(2,new Date,false,'xiaowang','some thing',true);
        this.messages.push(newMessage);
      }
    });
  }
}
