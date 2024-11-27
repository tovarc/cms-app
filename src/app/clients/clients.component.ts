import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface LastAction {
  time: string;
  label?: string;
  description: string;
}

interface User {
  id: number;
  name: string;
  avatar: string;
  lastAction: LastAction;
  activitiesDone: number | string;
  added: string;
  hasWarning?: boolean;
}

@Component({
  selector: 'app-clients',
  imports: [TranslateModule],
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  activeDropdown: number | null = null;

  users: User[] = [
    {
      id: 12,
      name: 'Marco Smith',
      avatar: '/api/placeholder/40/40',
      lastAction: {
        time: '15 mins ago',
        label: 'new',
        description: 'Started The Path of the Octopus',
      },
      activitiesDone: 3,
      added: '3 Days ago',
    },
    {
      id: 22,
      name: 'Francine Schneider',
      avatar: '/api/placeholder/40/40',
      lastAction: {
        time: 'yesterday',
        description: 'Logged in for the first time',
      },
      activitiesDone: 'None',
      added: 'Yesterday',
      hasWarning: true,
    },
    {
      id: 33,
      name: 'Henry Boyce',
      avatar: '/api/placeholder/40/40',
      lastAction: {
        time: '12 May 2024',
        description: 'Completed MDMA 101',
      },
      activitiesDone: 5,
      added: '24 Apr 2024',
    },
    {
      id: 1,
      name: 'Marco Smith',
      avatar: '/api/placeholder/40/40',
      lastAction: {
        time: '15 mins ago',
        label: 'new',
        description: 'Started The Path of the Octopus',
      },
      activitiesDone: 3,
      added: '3 Days ago',
    },
    {
      id: 2,
      name: 'Francine Schneider',
      avatar: '/api/placeholder/40/40',
      lastAction: {
        time: 'yesterday',
        description: 'Logged in for the first time',
      },
      activitiesDone: 'None',
      added: 'Yesterday',
      hasWarning: true,
    },
    {
      id: 3,
      name: 'Henry Boyce',
      avatar: '/api/placeholder/40/40',
      lastAction: {
        time: '12 May 2024',
        description: 'Completed MDMA 101',
      },
      activitiesDone: 5,
      added: '24 Apr 2024',
    },
  ];

  toggleDropdown(userId: number): void {
    this.activeDropdown = this.activeDropdown === userId ? null : userId;
  }
}
