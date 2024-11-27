import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    imports: [CommonModule, TranslateModule],
    templateUrl: './home.component.html'
})
export class HomeComponent {
  public updates: any[] = [
    {
      date: '15 May 2024, 10:06',
      user: 'Shmil Avadon',
      status: 'Completed',
      title: 'The Path of the Octopus',
    },
    {
      date: '16 May 2024, 11:15',
      user: 'Lara Croft',
      status: 'In Progress',
      title: 'Tomb of the Lost',
    },
    {
      date: '17 May 2024, 09:30',
      user: 'Nathan Drake',
      status: 'Not Started',
      title: 'Secrets of the Abyss',
    },
    {
      date: '18 May 2024, 14:22',
      user: 'Aloy Norah',
      status: 'Completed',
      title: 'Rise of the Machines',
    },
    {
      date: '19 May 2024, 16:45',
      user: 'Master Chief',
      status: 'In Progress',
      title: 'Battle for Earth',
    },
  ];

  public updateOptions: string[] = [
    'preview',
    'download_results',
    'view_client',
    'mark_as_read',
    'mark_as_unread',
    'delete',
  ];

  public hideUpdateOptions(): void {
    for (const update of this.updates) {
      update.expanded = false;
    }
  }

  public showUpdateOptions(current: any): void {
    for (const update of this.updates) {
      if (update != current) {
        update.expanded = false;
      }
    }
    current.expanded = !current.expanded;
  }
}
