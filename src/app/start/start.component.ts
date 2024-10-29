import { Component, input, output } from '@angular/core';
import { ActivityScreen } from '../mock-activities';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
})
export class StartComponent {
  screen = input<ActivityScreen>();

  navigate = output<string>();

  onNavigate = (action: string) => this.navigate.emit(action);
}
