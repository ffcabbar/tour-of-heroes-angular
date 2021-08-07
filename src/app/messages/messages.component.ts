import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // wow: string = 'asdasd';

  // getMessage = () => {
  //   this.wow = this.messageService.messages[0];
  // };

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    // this.getMessage();
  }
}
