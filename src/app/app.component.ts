import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'fe-pusher-chat-app';
  messages: any[] = [] ;
  newMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
      this.messageService.getMessages().subscribe((message: any) => {
        this.messages = messages;
      });

      this.messageService.subscribeToNewMessages((message: any) => {
        this.message.push(message);
      });
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.newMessage).subscribe((message: any) => {
      if (!this.messages.find((m: any) => m.id === message.id)) {
        this.messages.push(message);
      }

      this.newMessage = '';
    });
  }
}
