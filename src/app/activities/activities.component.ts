import { Component } from '@angular/core';
import { activities } from '../mock-activities';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './activities.component.html',
})
export class ActivitiesComponent {
  activities = activities;
}
