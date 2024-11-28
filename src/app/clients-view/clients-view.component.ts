import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'client-view',
  standalone: true,
  templateUrl: './clients-view.component.html',
  imports: [CommonModule, TranslateModule, RouterModule],
})
export class ClientViewComponent {
  history = [
    {
      id: 1,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/octopus.png',
      color: '#F0ECCA',
    },
    {
      id: 2,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/octopus.png',
      color: '#F0ECCA',
    },

    {
      id: 3,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/pill.png',
      color: '#BAD6C1',
    },
    {
      id: 4,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/pill.png',
      color: '#BAD6C1',
      flag: true,
    },
    {
      id: 5,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/pill.png',
      color: '#BAD6C1',
    },
    {
      id: 6,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/voyage.png',
      color: '#F3966BA8',
    },
    {
      id: 7,
      date: '15 May 2024, 10:06',
      status: 'Completed',
      name: 'The Path of the Octopus',
      image: 'assets/voyage.png',
      color: '#F3966BA8',
    },
  ];

  activeDropdown: number | null = null;
  toggleDropdown(userId: number): void {
    this.activeDropdown = this.activeDropdown === userId ? null : userId;
  }
}
