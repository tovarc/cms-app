import { Component, input } from '@angular/core';
import { ActivityScreen } from '../mock-activities';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-finish',
    imports: [RouterModule],
    templateUrl: './finish.component.html'
})
export class FinishComponent {
  screen = input<ActivityScreen>();
}
