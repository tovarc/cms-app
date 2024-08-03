import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isToday } from 'date-fns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);

  public dir: string = 'ltr';

  public setDir(event: any): void {
    this.dir = event.target.value;

    if (this.dir == 'rtl') {
      this.switchLanguage('he');
    } else {
      this.switchLanguage('en');
    }
  }

  public response: any = [
    {
      channelId: 3,
      content:
        'Hallo miteinander, wollte nachfragen, wann ihr Zeit habt die neuen Aufgaben zu besprechen. Wann passt es euch?',
      id: 29,
      isRead: true,
      issueId: null,
      senderId: '60',
      timestamp: 'Mon, 24 Jun 2024 11:33:39 GMT',
    },
    {
      channelId: 3,
      content: 'Habt ihr morgen um 10:00 Uhr Zeit?',
      id: 37,
      isRead: true,
      issueId: null,
      senderId: '60',
      timestamp: 'Mon, 24 Jun 2024 11:33:45 GMT',
    },
    {
      channelId: 3,
      content: 'Ja, mir passt 10 Uhr',
      id: 38,
      isRead: true,
      issueId: null,
      senderId: '61',
      timestamp: 'Mon, 26 Jun 2024 11:34:48 GMT',
    },
    {
      channelId: 3,
      content: 'Passt :) Andere Frage...',
      id: 39,
      isRead: true,
      issueId: null,
      senderId: '44',
      timestamp: 'Fri, 02 Aug 2024 11:43:17 GMT',
    },
  ];

  public groupedMessages: any[] = [];

  ngOnInit() {
    this.setMessages();
    this.switchLanguage('en');
  }

  public switchLanguage(language: string) {
    this.translateService.use(language);
  }

  public setMessages() {
    const data = this.response.reduce((result: any, message: any) => {
      const messageDate = this.formatDate(new Date(message.timestamp));

      if (!result[messageDate]) {
        result[messageDate] = {
          date: messageDate,
          messages: [],
        };
      }

      result[messageDate].messages.push(message);

      return result;
    }, {});

    // this.groupedMessages = data;

    this.groupedMessages = Object.values(data);

    console.log(this.groupedMessages);
    console.log(this.groupedMessages.length);
  }

  public formatDate(date: Date): string {
    const messageDate = date;

    return isToday(messageDate) ? 'Today' : date.toLocaleString().split(',')[0];
  }
}
