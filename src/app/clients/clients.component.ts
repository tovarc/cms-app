import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  public clients: any[] = [
    {
      name: 'Alice Johnson',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 12,
      added: '2 days ago',
      last_action: '30 mins ago',
      action: 'Uploaded a profile picture',
    },
    {
      name: 'Bob Smith',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 8,
      added: '5 days ago',
      last_action: '10 mins ago',
      action: 'Joined a new group',
    },
    {
      name: 'Carol Davis',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 15,
      added: '1 week ago',
      last_action: '1 hour ago',
      action: 'Commented on a post',
    },
    {
      name: 'David Brown',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 5,
      added: '3 days ago',
      last_action: '2 hours ago',
      action: 'Completed a quiz',
    },
    {
      name: 'Eve Wilson',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 9,
      added: '4 days ago',
      last_action: '45 mins ago',
      action: 'Shared a link',
    },
    {
      name: 'Frank Moore',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 20,
      added: '6 days ago',
      last_action: '5 mins ago',
      action: 'Started a new project',
    },
    {
      name: 'Grace Taylor',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 7,
      added: '2 days ago',
      last_action: '3 hours ago',
      action: 'Updated profile information',
    },
    {
      name: 'Henry Anderson',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 11,
      added: '1 week ago',
      last_action: '20 mins ago',
      action: 'Attended a virtual event',
    },
    {
      name: 'Isabella Martinez',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 14,
      added: '4 days ago',
      last_action: '1 hour ago',
      action: 'Sent a message',
    },
    {
      name: 'Jack Lee',
      avatar: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      activities_done: 6,
      added: '3 days ago',
      last_action: '10 mins ago',
      action: 'Created a new post',
    },
  ];

  public clientsCopy: any[] = [];

  ngOnInit(): void {
    this.clientsCopy = this.clients;
  }

  public searchClients(criteria: string) {
    this.clientsCopy = this.clients.filter((user: any) =>
      user.name.toLowerCase().includes(criteria.toLowerCase()),
    );
  }

  public clientOptions: string[] = [
    'view_client',
    'assign_voyage',
    'edit_profile',
    'duplicate',
    'delete',
  ];

  public hideClientOptions(): void {
    for (const client of this.clients) {
      client.expanded = false;
    }
  }

  public showClientOptions(current: any): void {
    for (const client of this.clients) {
      if (client != current) {
        client.expanded = false;
      }
    }
    current.expanded = !current.expanded;
  }
}
