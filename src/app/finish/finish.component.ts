import { Component, input } from '@angular/core';
import { ActivityScreen } from '../mock-activities';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './finish.component.html',
})
export class FinishComponent {
  screen = input<ActivityScreen>();
}
