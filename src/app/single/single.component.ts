import { Component, OnInit, inject } from '@angular/core';
import { Activity, activities } from '../mock-activities';
import { ActivatedRoute } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { PagesComponent } from '../pages/pages.component';
import { FinishComponent } from '../finish/finish.component';

@Component({
    selector: 'app-single',
    imports: [StartComponent, PagesComponent, FinishComponent],
    templateUrl: './single.component.html'
})
export class SingleComponent implements OnInit {
  private route = inject(ActivatedRoute);

  activities = activities;

  activity!: Activity;

  currentScreen: string = 'start';
  currentPage: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ id }) => {
        const activity = this.activities.find((e) => e.id == id);

        if (activity) this.activity = activity;
      },
    });
  }

  handleNavigate(action: string | undefined): void {
    console.log(action);
    if (action === 'navigate-next') {
      switch (this.currentScreen) {
        case 'start':
          this.currentScreen = 'pages';
          break;
        case 'pages':
          if (this.currentPage < this.activity.screens.pages.length) {
            this.currentPage += 1;
          } else {
            this.currentScreen = 'end';
          }
          break;
      }
    }

    if (action === 'navigate-prev') {
      switch (this.currentScreen) {
        case 'pages':
          if (this.currentPage > 0) {
            this.currentPage -= 1;
          } else {
            this.currentScreen = 'start';
          }
          break;
      }
    }

    if (action === 'finish-activity') {
      this.currentScreen = 'end';
    }
  }
}
