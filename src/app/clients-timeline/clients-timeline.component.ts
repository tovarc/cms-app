import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'client-timeline',
  standalone: true,
  templateUrl: './clients-timeline.component.html',
  imports: [CommonModule, TranslateModule, RouterModule],
})
export class ClientTimelineComponent {
  history = [
    {
      day: 'Mon',
      date: '14 May',
      open: false,
      timeline: [
        { id: 1, time: '10:00', status: 'Completed', name: 'MDMA 101' },
        { id: 2, time: '10:00', status: 'Completed', name: 'MDMA 101' },
        { id: 3, time: '10:00', status: 'Completed', name: 'MDMA 101' },
      ],
    },
    {
      day: 'Mon',
      date: '14 May',
      open: true,
      timeline: [
        { id: 4, time: '10:00', status: 'Completed', name: 'MDMA 101' },
        { id: 5, time: '10:00', status: 'Completed', name: 'MDMA 101' },
      ],
    },
    {
      day: 'Mon',
      date: '14 May',
      open: true,
      timeline: [
        { id: 6, time: '10:00', status: 'Completed', name: 'MDMA 101' },
        { id: 7, time: '10:00', status: 'Completed', name: 'MDMA 101' },
        { id: 8, time: '10:00', status: 'Completed', name: 'MDMA 101' },
        { id: 9, time: '10:00', status: 'Completed', name: 'MDMA 101' },
      ],
    },
  ];

  activeDropdown: number | null = null;
  toggleDropdown(userId: number): void {
    this.activeDropdown = this.activeDropdown === userId ? null : userId;
  }
}
