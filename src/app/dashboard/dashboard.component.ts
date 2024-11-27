import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, RouterModule, TranslateModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public sidebarIsOpen: boolean = false;

  public toggleSidebar(): void {
    this.sidebarIsOpen = !this.sidebarIsOpen;
  }
}
