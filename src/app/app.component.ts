import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);

  public dir: string = 'ltr';

  public setDir(event: any): void {
    this.dir = event.target.value;

    if (this.dir == 'rtl') {
      this.switchLanguage('he');
    } else {
      this.switchLanguage('en');
    }
  }

  ngOnInit() {
    this.switchLanguage('en');
  }

  public switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
