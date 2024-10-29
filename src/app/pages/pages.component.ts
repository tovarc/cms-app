import { Component, input, output } from '@angular/core';
import { ActivityScreen } from '../mock-activities';

@Component({
  selector: 'app-pages',
  standalone: true,
  templateUrl: './pages.component.html',
})
export class PagesComponent {
  screen = input<ActivityScreen>();

  navigate = output<string | undefined>();

  onNavigate = (action: string | undefined) => this.navigate.emit(action);
}
