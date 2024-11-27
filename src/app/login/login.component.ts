import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    imports: [RouterModule, TranslateModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {}
