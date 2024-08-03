import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {}
